<script>
	import { loadTodos, removeTodo } from '$lib/todo';

	/** @type {String} */
	export let value;

	/** @type {String} */
	export let key;

	/** @type {Map<String, String>} */
	export let todos;

	let done = false;

	function checkTodo() {
		done = !done;
	}

	function remove() {
		removeTodo(key);
		todos = loadTodos();
	}
</script>

<div id={key} class="flex gap-2 justify-center items-center">
	<input type="checkbox" class="flex-none checkbox" on:click={checkTodo} />

	<div class="flex-auto">
		<p class="text-left{+done ? ' line-through' : ''}">{value}</p>
	</div>

	<button class="flex-initial btn btn-ghost" on:click={remove}> Remove </button>
</div>
