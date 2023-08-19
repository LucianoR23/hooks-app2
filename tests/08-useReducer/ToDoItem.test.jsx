import { fireEvent, render, screen } from "@testing-library/react"
import { ToDoItem } from "../../src/08-useReducer/ToDoItem"


describe('Pruebas en ToDoItem', () => {

    const toDo = {
        id: 1,
        desciption: 'Gema del Alma',
        done: false
    }

    const onDeleteToDoMock = jest.fn()
    const onToggleToDoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test('debe mostrar el To Do pendiente', () => {

        render( <ToDoItem toDo={ toDo } onToggleToDo={ onToggleToDoMock } onDeleteToDo={ onDeleteToDoMock } /> )
        
        const liElement = screen.getByRole('listitem')
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
        
        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('align-self-center')

    })

    test('debe mostrar el To Do completado', () => {

        toDo.done = true

        render( <ToDoItem toDo={ toDo } onToggleToDo={ onToggleToDoMock } onDeleteToDo={ onDeleteToDoMock } /> )
        
        const liElement = screen.getByRole('listitem')
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
        
        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toBe('align-self-center text-decoration-line-through')

    })

    test('span debe llamar el ToggleToDo cuando se hace click', () => {
        
        render( <ToDoItem toDo={ toDo } onToggleToDo={ onToggleToDoMock } onDeleteToDo={ onDeleteToDoMock } /> )
        const spanElement = screen.getByLabelText('span')
        fireEvent.click( spanElement )

        expect( onToggleToDoMock ).toHaveBeenCalledWith( toDo.id )
        expect( spanElement.className ).toBe('align-self-center text-decoration-line-through')

    })

    test('span debe llamar el DeleteToDo cuando se hace click', () => {
        
        render( <ToDoItem toDo={ toDo } onToggleToDo={ onToggleToDoMock } onDeleteToDo={ onDeleteToDoMock } /> )
        const buttonElement = screen.getByRole('button')
        fireEvent.click( buttonElement )

        expect( onDeleteToDoMock ).toHaveBeenCalledWith( toDo.id )

    })

})