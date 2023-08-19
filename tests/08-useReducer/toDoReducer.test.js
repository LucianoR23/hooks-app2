import { toDoReducer } from "../../src/08-useReducer/toDoReducer"


describe('Pruebas en el toDoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo to do',
        done: false,
    }]

    test('debe retornar el estado inicial', () => {

        const newState = toDoReducer( initialState, {} )
        expect( newState ).toBe( initialState )

    })
    
    test('debe agregar un to do', () => {

        const action = {
            type: 'Add to do',
            payload: {
                id: 2,
                description: 'New demo to do',
                done: false,
            }
        }
        const newState = toDoReducer( initialState, action )
        expect( newState.length ).toBe( 2 )
        expect( newState ).toContain( action.payload )

    })

    test('debe eliminar un to do', () => {

        const action = {
            type: 'Remove to do',
            payload: 1
        }
        const newState = toDoReducer( initialState, action )
        expect( newState.length ).toBe( 0 )

    })

    test('debe cambiar el done en un to do', () => {

        const action = {
            type: 'Toggle to do',
            payload: 1
        }
        const newState = toDoReducer( initialState, action )
        expect( newState[0].done ).toBeTruthy()

    })

})