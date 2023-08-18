

const initialState = [
    {
        id: 1,
        toDo: 'Recordar la gema del Alma',
        done: false,
    }
]

const toDoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add toDo' ){
        return [ ...state, action.payload ]
    }

    return state
}

let toDos = toDoReducer()
console.log(toDos)

const newToDo = {
    id: 2,
    toDo: 'Recolectar la gema del poder',
    done: false,
}

const addToDoAction = {
    type: '[TODO] add toDo',
    payload: newToDo,
}


toDos = toDoReducer( toDos, addToDoAction )

console.log(toDos)