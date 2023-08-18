import { useEffect, useReducer } from "react"
import { toDoReducer } from "../08-useReducer/toDoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || []
}

export const useToDo = () => {

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
        console.log(pendingToDos)
    }
    
    const handleDeleteToDo = ( id ) => {
        dispatch({
            type: 'Remove to do',
            payload: id
        })
    }
    
    const handleToggleToDo = ( id ) => {
        dispatch({
            type: 'Toggle to do',
            payload: id
        })
    }
    
    const pendingToDos = toDos.filter( toDo => toDo.done === false )

    return {
        toDos,
        handleNewToDo,
        handleDeleteToDo,
        handleToggleToDo,
        pendingToDos
    }
}
