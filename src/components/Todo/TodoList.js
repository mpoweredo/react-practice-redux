import { useDispatch, useSelector } from "react-redux";
import TodoListElement from "./TodoListElement";
import { todosActions } from "../../store/todos-slice";
import classes from "./TodoList.module.css";
import { removeTodoData } from "../../store/todos-actions";

import React from "react";

const TodoList = (props) => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);

	const onTodoCompleteHandler = (id) => {
		dispatch(todosActions.completeTodo(id));
	};

	const onTodoDeleteHandler = (firebaseId, localId) => {
		dispatch(removeTodoData(firebaseId, localId))
	};


	const renderedItems = todos.map((todo) => {
		return (
			<TodoListElement
				title={todo.title}
				complete={todo.complete}
				key={todo.id}
				id={todo.id}
				onTodoComplete={onTodoCompleteHandler}
				onTodoDelete={onTodoDeleteHandler}
				firebaseId={todo.firebaseId}
			/>
		);
	});

	return <ul className={classes["todo-container"]}>
		{renderedItems}
	</ul>;
};

export default TodoList;
