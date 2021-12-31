import { useEffect } from "react"
import useTodoState from "./hooks/useTodoState"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material"

function TodoApp() {

    //if theres no intialTodos, return empty array[]
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
    // const initialTodos = [
    //     { id: 1, task: "Clean Fishtank", completed: false },
    //     { id: 2, task: "Wash Car", completed: true },
    //     { id: 3, task: "Play Games", completed: false }
    // ]


    // put all the function into a custom hook, and make this component more clean
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos)

    //run everytime when todos has changed
    //save todos into local storage 
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])



    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
            <AppBar
                color="primary"
                position="static"
                style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">
                        Todos with Hooks
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp