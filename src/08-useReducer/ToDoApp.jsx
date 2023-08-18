import { useEffect, useReducer } from "react"
import { toDoReducer } from "./toDoReducer"
import { ToDoList } from "./ToDoList"
import { ToDoAdd } from "./ToDoAdd"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la gema del alma',
    //     done: false,
    // },
]

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || []
}

export const ToDoApp = () => {

    const [ toDos, dispatch ] = useReducer( toDoReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify( toDos ))
    }, [toDos])
    

    const handleNewToDo = ( toDo ) => {
        const action = {
            type: 'Add to do',
            payload: toDo
        }

        dispatch( action )
    }

    const handleDeleteToDo = ( id ) => {
        dispatch({
            type: 'Remove to do',
            payload: id
        })
    }

    return (
        <>
            <h1>To Do App: (6) <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList toDos={ toDos } onDeleteToDo={ handleDeleteToDo } />
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
