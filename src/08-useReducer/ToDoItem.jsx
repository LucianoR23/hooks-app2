

export const ToDoItem = ({ toDo, onDeleteToDo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ toDo.description }</span>
            <button onClick={ () => onDeleteToDo( toDo.id ) } className="btn btn-danger">Delete</button>
        </li>
    )
}
