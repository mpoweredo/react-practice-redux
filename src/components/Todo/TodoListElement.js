import React from "react";

import DoneIcon from "@mui/icons-material/Done";
import classes from "./TodoListElement.module.css";

const TodoListElement = (props) => {
	const deleteTodoHandler = () => {
		props.onTodoDelete(props.firebaseId, props.id);
	};

	const completeTodoHandler = () => {
		props.onTodoComplete(props.id);
	};

	return (
		<li className={classes["todo-list-item"]}>
			<div className={classes['todo-header']}>
				<h2>{props.title}</h2>
				<DoneIcon onClick={completeTodoHandler} className={props.complete ? classes.complete : classes['not-complete']} />
			</div>
			<div className={classes["buttons-container"]}>
				<button
					className={classes["todo-item-del-btn"]}
					onClick={deleteTodoHandler}
				>
					delete todo
				</button>
			</div>
		</li>
	);
};

export default TodoListElement;
