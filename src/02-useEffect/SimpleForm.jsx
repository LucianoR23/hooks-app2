import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'lemy2',
        email: 'lemy@aol.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect se llamo')
    }, [])
    


    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={ username } onChange={ onInputChange } />
            <input type="email" className="form-control mt-2" placeholder="example@example.com" name="usernaemailme" value={ email } onChange={ onInputChange } />

            {
                (username === 'lemy') && <Message />
            }
            
        </>
    )
}
