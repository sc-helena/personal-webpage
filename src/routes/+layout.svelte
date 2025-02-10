<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

	let tabSet: number = 0;
</script>

<div class="h-4/5">
	<TabGroup class="[&>.tab-list]:flex [&>.tab-list]:flex-row text-tertiary-500 text-xl">
		<TabAnchor
			href="/"
			selected={$page.url.pathname === '/'}
			class="basis-1/3"
			active="border-b-2 border-b-primary-500"
		>
			<span>Home</span>
		</TabAnchor>
		<TabAnchor
			href="/bio"
			selected={$page.url.pathname === '/bio'}
			class="basis-1/3"
			active="border-b-2 border-b-primary-500"
		>
			<span>Bio</span>
		</TabAnchor>
		<Tab
			class="basis-1/3"
			active="border-b-2 border-b-primary-500"
			bind:group={tabSet}
			name="home"
			value={2}>Photos</Tab
		>
	</TabGroup>
	<slot />
</div>
