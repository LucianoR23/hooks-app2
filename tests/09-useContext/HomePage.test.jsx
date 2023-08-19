import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe('Probando el HomePage', () => {

    const user = {
        id: 1,
        name: 'Lemy'
    }

    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect( preTag.innerHTML ).toBe( 'null' )


    })

    test('debe mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        const h1 = screen.getByLabelText('title')

        expect( preTag.innerHTML ).toContain( user.name )
        expect( preTag.innerHTML ).toContain( user.id.toString() )
        expect( h1.innerHTML ).toBe( 'Home Page Lemy' )


    })

})