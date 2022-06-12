import { createSlice } from "@reduxjs/toolkit";

// const item = { title: "ez", id: "kd", complete: false };

const initialTodosState = {
	todos: [],
};

const todosSlice = createSlice({
	name: "todos",
	initialState: initialTodosState,
	reducers: {
		addTodo(state, action) {
			state.todos = [...state.todos, action.payload];
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		completeTodo(state, action) {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		},
	},
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
