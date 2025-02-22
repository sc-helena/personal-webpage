import { AI_SEARCH_ENDPOINT, AI_SEARCH_API_KEY, INDEX_NAME, OPENAI_API_KEY, OPENAI_ENDPOINT } from '$env/static/private'
import { SearchClient, AzureKeyCredential } from "@azure/search-documents"
import type { RequestHandler } from '@sveltejs/kit';
import { AzureOpenAI } from 'openai';
import { list } from 'postcss';


const client = new SearchClient(AI_SEARCH_ENDPOINT, INDEX_NAME, new AzureKeyCredential(AI_SEARCH_API_KEY));

async function getEmbedding(content: string) {
  const apiKey = OPENAI_API_KEY;
  const apiVersion = "2023-05-15"
  const endpoint = OPENAI_ENDPOINT
  const deployment = "text-embedding";

  const client = new AzureOpenAI({
    apiKey,
    endpoint,
    apiVersion,
    deployment
  });

  const response = await client.embeddings.create({
    input: content,
    model: "text-embedding-ada-002",
  });

  const embedding = response.data[0].embedding;

  return embedding;
}

const generateAnswer = async (query: string, texts: string[]) => {
  const apiKey = OPENAI_API_KEY;
  const apiVersion = "2024-08-01-preview"
  const endpoint = OPENAI_ENDPOINT
  const deployment = "gpt-4o-mini"

  const chatClient = new AzureOpenAI({
    apiKey,
    endpoint,
    apiVersion,
    deployment
  });

  const message = `
    Write a answer to the question "${query}" using the information below. Do not use any other knowledge. 

    ${texts.join(" ")}
  `
  const result = await chatClient.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message }
    ], model: 'gpt-35-turbo', max_tokens: 100
  });

  return result.choices[0].message.content
}

export const GET: RequestHandler = async ({ url }) => {

  const content = url.searchParams.get('content') ?? ''
  console.log(content)
  const searchResults = await client.search("*", {
    vectorSearchOptions: {
      queries: [
        {
          kind: "vector",
          fields: ["embeddedContent"],
          kNearestNeighborsCount: 2,
          vector: await getEmbedding(content),
        },
      ],
    },
  });

  const resultTexts = []
  for await (const result of searchResults.results) {
    resultTexts.push((result.document as { content: string }).content)
  }

  const answer = await generateAnswer(content, resultTexts)


  return new Response(answer, {
    headers: { "Content-Type": "text/plain" }, // Set the content type to plain text
  })
}