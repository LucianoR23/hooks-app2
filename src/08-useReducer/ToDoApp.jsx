import { ToDoAdd, ToDoList } from "./"
import { useToDo } from "../hooks"


export const ToDoApp = () => {

    const { toDos, handleNewToDo, handleDeleteToDo, handleToggleToDo, pendingToDos } = useToDo()

    return (
        <>

            <h1>To Do App: {toDos.length} </h1>
            <h3>Pending: ({pendingToDos.length})</h3>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList toDos={ toDos } onDeleteToDo={ handleDeleteToDo } onToggleToDo={ handleToggleToDo } />
                </div>
                
                <div className="col-5">
                    <h4>Add to do</h4>
                    <hr />
                    <ToDoAdd onNewToDo={ handleNewToDo } />
                </div>
            </div>

        </>
    )
}
