import { createId } from '@paralleldrive/cuid2';

/** @type {Map<String, String>} */
let store = new Map();

/** @param {String} value*/
function addTodo(value) {
	store.set(createId(), value);
	saveTodos();
}

/** @param {String} key */
function removeTodo(key) {
	store.delete(key);
	saveTodos();
}

function clearTodos() {
	store.clear();
	saveTodos();
}

/** @returns {Map<String, String>} */
function loadTodos() {
	if (typeof window === 'undefined') return store;
	let todos = localStorage.getItem('todos');
	if (todos === null) {
		saveTodos();
		return store;
	}
	store = new Map(JSON.parse(todos));
	return store;
}

function saveTodos() {
	localStorage.setItem('todos', JSON.stringify(Array.from(store.entries())));
}

export { addTodo, removeTodo, clearTodos, loadTodos, saveTodos };
