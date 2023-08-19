import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils"


describe('Pruebas en useCounter', () => {

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() )
        const { counter, decrement, increment, reset } = result.current

        expect( counter ).toBe(1)
        expect( decrement ).toEqual( expect.any( Function ) )
        expect( increment ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) )

    })

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { counter } = result.current

        expect( counter ).toBe(100)

    })

    test('debe incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() )
        const { increment } = result.current

        act( () => {
            increment()
            increment()
        })

        expect( result.current.counter ).toBe(3)

    })

    test('debe decrementar el contador', () => {

        const { result } = renderHook( () => useCounter() )
        const { decrement } = result.current

        act( () => {
            decrement()
        })

        expect( result.current.counter ).toBe(0)

    })

    test('debe incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() )
        const { reset, increment } = result.current

        act( () => {
            increment()
            increment()
            reset()
        })

        expect( result.current.counter ).toBe(1)

    })

})