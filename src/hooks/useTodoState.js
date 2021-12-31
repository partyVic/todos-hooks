import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useTodoState = (initialTodos) => {
    const [todos, setTodos] = useState(initialTodos)

    //set a function as prop to let child component add Todos
    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    }

    const removeTodo = (id) => {
        //filter out removed todo
        //------!!! todo.id NOT todos.id !!! -------
        const updatedTodos = todos.filter(todo => todo.id !== id)
        //call setTodos with new todos array
        setTodos(updatedTodos)
    }

    //make the todo task a cross line
    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const editTodo = (id, newTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: newTask }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return {
        todos,
        addTodo: addTodo,
        removeTodo,
        toggleTodo,
        editTodo,
    }
}

export default useTodoState