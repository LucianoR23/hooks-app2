import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils"


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Lemy',
        email: 'lemy@google.com'
    }

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) )
        console.log(result.current)
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onReset: expect.any( Function )
        })

    })

    test('debe cambiar el nombre del formulario', () => {

        const newValue = 'Tomas'

        const { result } = renderHook( () => useForm( initialForm ) )
        const { onInputChange } = result.current
        act( () => {
            onInputChange({ target: { name: 'name', value: 'Tomas'}})
        })

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)

    })

    test('debe realizar el reset del formulario', () => {

        const newValue = 'Tomas'

        const { result } = renderHook( () => useForm( initialForm ) )
        const { onInputChange, onReset } = result.current
        act( () => {
            onInputChange({ target: { name: 'name', value: 'Tomas'}})
            onReset()
        })

        expect(result.current.name).toBe( initialForm.name )
        expect(result.current.formState.name).toBe( initialForm.name )

    })

})