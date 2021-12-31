import React from "react"
import Todo from "./Todo"
import { Paper, List, Divider } from "@mui/material"

function TodoList(props) {
    if (props.todos.length) {
        return (
            <Paper>
                <List>
                    {props.todos.map((todo, i) => (
                        <React.Fragment key={todo.id}>
                            <Todo
                                id={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                removeTodo={props.removeTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                            />

                            {/* make the last item doesn't have divider */}
                            {i < props.todos.length - 1 && <Divider />}

                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        )
    } else {
        return null
    }
}

export default TodoList