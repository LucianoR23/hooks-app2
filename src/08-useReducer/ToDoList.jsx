import { ToDoItem } from "./"


export const ToDoList = ({ toDos = [], onDeleteToDo, onToggleToDo }) => {

    return (
        <ul className="list-group">
            {
                toDos.map( toDo => (
                        <ToDoItem key={ toDo.id } toDo={ toDo } onDeleteToDo={ onDeleteToDo } onToggleToDo={ onToggleToDo } />
                    ))
            }
        </ul>
    )
}
