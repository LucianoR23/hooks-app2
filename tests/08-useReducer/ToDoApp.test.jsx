import { render, screen } from "@testing-library/react"
import { ToDoApp } from "../../src/08-useReducer"
import { useToDo } from "../../src/hooks/useToDo"

jest.mock('../../src/hooks/useToDo')

describe('Pruebas en ToDoApp', () => {

    useToDo.mockReturnValue({
        toDos: [
            { id: 1, description: 'Poder', done: false },
            { id: 2, description: 'Espacio', done: false },
        ],
        handleNewToDo: jest.fn(),
        handleDeleteToDo: jest.fn(),
        handleToggleToDo: jest.fn(),
        pendingToDos: 2
    })

    test('debe mostrar el componente correctamente', () => {

        render( <ToDoApp /> )
        
        expect( screen.getByText('Poder') ).toBeTruthy()
        expect( screen.getByText('Espacio') ).toBeTruthy()
        expect( screen.getByRole('textbox') ).toBeTruthy()

    })

})