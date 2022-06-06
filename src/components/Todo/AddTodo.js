import { useDispatch } from "react-redux";
import React, { useState } from "react";

import classes from './AddTodo.module.css'

import { todosActions } from "../../store/todos-slice";

const AddTodo = () => {
	const dispatch = useDispatch();
	const [todoTitleInput, setTodoTitleInput] = useState("");

	const todoTitleInputHandler = (e) => {
		setTodoTitleInput(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const todoTitle = todoTitleInput;

        if (todoTitle === '') return

		const todo = {
			title: todoTitle,
			complete: false,
			id: Math.random(),
		};

		dispatch(todosActions.addTodo(todo));
		setTodoTitleInput("");
	};

	return (
		<form onSubmit={submitHandler} className={classes['form-control']}>
			<label htmlFor="todo">Todo Title</label>
			<input
				id="todo"
				type="text"
				onChange={todoTitleInputHandler}
				value={todoTitleInput}
                className={classes['todo-title-input']}
			/>
			<button className={classes['add-todo-button']} type="submit">add todo</button>
		</form>
	);
};

export default AddTodo;
