import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material"
import useToggleState from './hooks/useToggleState'
import EditTodoForm from "./EditTodoForm"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {

    //checking edit icon state
    const [isEditing, toggleIsEditing] = useToggleState(false)

    if (isEditing) {
        return (
            <ListItem>
                <EditTodoForm
                    editTodo={editTodo}
                    id={id}
                    task={task}
                    toggleIsEditing={toggleIsEditing}
                />
            </ListItem>
        )
    } else {
        return (
            <ListItem>
                <Checkbox
                    tabIndex={-1}
                    checked={completed}
                    onClick={() => toggleTodo(id)}
                />
                <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default Todo