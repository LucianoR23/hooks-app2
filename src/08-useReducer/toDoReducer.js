

export const toDoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case 'Add to do':
            return [ ...initialState, action.payload ]

        case 'Remove to do':
            return initialState.filter( toDo => toDo.id !== action.payload )
    
        default:
            return initialState
    }

}
