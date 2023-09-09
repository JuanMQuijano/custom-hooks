import { useEffect, useReducer } from "react"
import { todoReducer } from "../07-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Delete todo',
            payload: id
        });
    }

    const handleUpdateTodo = (id) => {

        const action = {
            type: 'Update todo',
            payload: id
        }

        dispatch(action)
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleUpdateTodo,
    }
}