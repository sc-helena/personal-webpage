<script lang="ts">
	import '../app.postcss';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	let tabSet: number = 0;
</script>

<div class="h-screen bg-surface-50">
	<TabGroup class="[&>.tab-list]:flex [&>.tab-list]:flex-row text-tertiary-500 text-xl">
		<Tab
			class="basis-1/3"
			active="border-b-2 border-b-primary-500"
			bind:group={tabSet}
			name="home"
			value={0}>Home</Tab
		>
		<Tab
			class="basis-1/3"
			active="border-b-2 border-b-primary-500"
			bind:group={tabSet}
			name="home"
			value={1}>Bio</Tab
		>
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
