import { todosActions } from "./todos-slice";

export const sendTodosData = data => {
    return async (dispatch) => {
		dispatch(todosActions.addTodo(data));
        const sendRequest = async () => {
            const response = await fetch('https://react-http-91fc5-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error('Something went wrong...')
            }
        }
        try {
            await sendRequest()
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export const fetchTodosData = () => {
    return async dispatch => {
        const fetchTodos = async () => {
            const response = await fetch('https://react-http-91fc5-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
            
            if (!response.ok) {
                throw new Error('something went wrong...')
            }
    
            const data = await response.json()
    
            return data
        }

        try {
            const todosData = await fetchTodos()
            for (const key in todosData) {
                const todo = {
                    title: todosData[key].title,
                    complete: todosData[key].complete,
                    id: todosData[key].id,
                    firebaseId: [key].toString()
                }
                dispatch(todosActions.addTodo(todo))
            }
        } catch (error) {
            throw new Error('something went wrong')
        }
    }
}

export const removeTodoData = (firebaseId, localId) => {
    return async dispatch => {
        dispatch(todosActions.removeTodo(localId))

        const sendRequest = async () => {
            const response = await fetch(`https://react-http-91fc5-default-rtdb.europe-west1.firebasedatabase.app/todos/${firebaseId}.json`, { method: 'DELETE'})
            
            if (!response.ok) {
                throw new Error('Something went wrong...')
            }
        }

        try {
            await sendRequest()
        } catch (error) {
            throw new Error(error.message)
        }
    }
}