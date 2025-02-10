<script>
	import img from '$lib/assets/stock_image.jpg';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { config } from '@fortawesome/fontawesome-svg-core';

	import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
	config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
</script>

<div class="flex justify-center items-center h-full">
	<div class="flex flex-row border-2 border-primary-500 h-4/6 w-4/6">
		<div class="basis-1/2">
			<div class="flex flex-col text-center h-full">
				<div class="text-primary-500 text-6xl my-10 basis-1/6">Helena Schneider</div>
				<div class="basis-3/6 text-xl mx-6">
					Passionate problem solver specializing in software development, digitalization, and
					innovation. <br /> <br /> Dedicated to leveraging technology for purpose-driven work that creates
					meaningful, transformative impact.
				</div>
				<div class="flex flex-col basis-2/6 justify-center place-items-center mx-10">
					<div class="text-xl">Let's connect!</div>
					<div class="flex flex-row">
						<a href="https://github.com/sc-helena">
							<FontAwesomeIcon icon={faGithub} size="2x" class="m-3" />
						</a>
						<a href="https://www.linkedin.com/in/helena--schneider/">
							<FontAwesomeIcon icon={faLinkedinIn} size="2x" class="m-3" />
						</a>
						<a href="mailto:helena-schneider@outlook.de" class="m-3">
							<FontAwesomeIcon icon={faEnvelope} size="2x" class="m-3" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="basis-1/2">
			<img src={img} class="h-full justify-self-end" alt="applicant" />
		</div>
	</div>
</div>
