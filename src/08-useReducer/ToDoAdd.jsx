import { useForm } from "../hooks"


export const ToDoAdd = ({ onNewToDo }) => {

    const { description, onInputChange, onReset } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault()
        if( description.length <= 4 ) return

        const newToDo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewToDo(newToDo)
        onReset()
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input type="text" placeholder="Whats next?" className="form-control" name="description" value={ description } onChange={ onInputChange } />
            <button type="submit" className="btn btn-primary mt-1">Add</button>
        </form>
    )
}
