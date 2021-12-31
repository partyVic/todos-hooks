import useInputState from "./hooks/useInputState";
import { TextField } from "@mui/material";

function EditTodoForm({ id, task, editTodo, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                editTodo(id, value)
                reset()
                toggleIsEditing()
            }}
            style={{
                marginLeft:"1rem",
                width:"100%"
            }}
            >
            <TextField
                value={value}
                onChange={handleChange}
                margin="normal"
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditTodoForm