<script>
	import { addTodo, clearTodos, loadTodos } from '$lib/todo';

	/** @type {Map<String, String>} */
	export let todos;

	let todo = '';
	function add() {
		addTodo(todo);
		todos = loadTodos();
	}

	function clear() {
		clearTodos();
		todos = loadTodos();
	}
</script>

<div class="flex justify-center items-center w-3/4 md:w-4/6 lg:w-3/6 join">
	<input
		bind:value={todo}
		type="text"
		class="flex-none input input-bordered w-full join-item"
		placeholder="what you gotta do?"
	/>

	<button class="flex-initial btn btn-primary join-item" on:click={add}> Add </button>
	<button class="flex-initial btn btn-secondary join-item" on:click={clear}> Clear </button>
</div>
