

export const ToDoItem = ({ toDo, onDeleteToDo, onToggleToDo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span onClick={ () => onToggleToDo( toDo.id ) } className={`align-self-center ${ toDo.done ? 'text-decoration-line-through' : '' }`}>{ toDo.description }</span>
            <button onClick={ () => onDeleteToDo( toDo.id ) } className="btn btn-danger">Delete</button>
        </li>
    )
}
