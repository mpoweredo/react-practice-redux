import { useDispatch, useSelector } from "react-redux";
import TodoListElement from "./TodoListElement";
import { todosActions } from "../../store/todos-slice";
import classes from './TodoList.module.css'

import React from "react";

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);

	const onTodoCompleteHandler = (id) => {
		dispatch(todosActions.completeTodo(id));
	};

	const onTodoDeleteHandler = (id) => {
		dispatch(todosActions.removeTodo(id));
	};

	return (
		<ul className={classes['todo-container']}>
			{todos.map((todo) => {
				return (
					<TodoListElement
						title={todo.title}
						complete={todo.complete}
						key={todo.id}
						id={todo.id}
						onTodoComplete={onTodoCompleteHandler}
						onTodoDelete={onTodoDeleteHandler}
					/>
				);
			})}
		</ul>
	);
};

export default TodoList;
