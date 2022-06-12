import "./App.css";
import AddTodo from "./components/Todo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/Todo/TodoList";
import { fetchTodosData, sendTodosData } from "./store/todos-actions";
import { useCallback, useEffect, useState } from "react";
import { todosActions } from "./store/todos-slice";

function App() {
	const dispatch = useDispatch();

	const addTodoHandler = (todo) => {
		dispatch(sendTodosData(todo))
	};

	useEffect(() => {
		dispatch(fetchTodosData())
	}, [dispatch])

	return (
		<div className="app">
			<AddTodo onAddTodo={addTodoHandler} />
			<TodoList />
		</div>
	);
}

export default App;
