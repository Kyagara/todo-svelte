<script>
	import { loadTodos, removeTodo } from '$lib/todo';

	/** @type {String} */
	export let value;

	/** @type {String} */
	export let key;

	/** @type {Number} */
	export let index;

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

<div id={key} class="flex gap-2 justify-center items-center select-none">
	<div
		class="flex flex-auto gap-2"
		role="button"
		tabindex={index}
		on:click={checkTodo}
		on:keyup={checkTodo}
	>
		<input bind:checked={done} type="checkbox" class="flex-none checkbox" />

		<div class="flex-auto">
			<p class="text-left{+done ? ' line-through' : ''}" title={value}>{value}</p>
		</div>
	</div>

	<button class="flex-initial btn btn-circle btn-ghost btn-sm" on:click={remove}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	</button>
</div>
