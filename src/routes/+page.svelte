<script>
	import Add from '$lib/components/Add.svelte';
	import Todo from '$lib/components/Todo.svelte';
	import { loadTodos } from '$lib/todo';
	import { onMount } from 'svelte';

	let loading = true;
	let todos = new Map();
	onMount(() => {
		todos = loadTodos();
		loading = false;
	});
</script>

<div class="flex flex-col items-center">
	<Add bind:todos />

	<div class="divider mt-0" />

	{#if loading}
		<span class="loading loading-dots loading-lg" />
	{:else}
		<div class="px-2 w-full sm:w-4/5 md:w-3/5">
			{#if todos.size === 0}
				<p class="text-center">nothing here :/</p>
			{:else}
				{#each [...todos] as [key, value]}
					<Todo bind:todos {key} {value} />
				{/each}
			{/if}
		</div>
	{/if}
</div>
