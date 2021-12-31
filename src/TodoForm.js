import useInputState from "./hooks/useInputState"
import { TextField, Paper } from "@mui/material"

function TodoForm(props) {

    //use custom hook
    const [value, handleChange, reset] = useInputState("")

    return (
        <Paper style={{margin:"1rem 0" , padding: "0 1rem"}}>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    props.addTodo(value)
                    reset()
                }}
            >
                <TextField
                    margin="normal"
                    label = "Add New Todo"
                    value={value}
                    onChange={handleChange}
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm