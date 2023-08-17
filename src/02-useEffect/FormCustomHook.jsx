import { useForm } from "../hooks/useForm"


export const FormCustomHook = () => {

    const { onReset, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })


    return (
        <>
            <h1>Form with custom hook</h1>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={ username } onChange={ onInputChange } />
            <input type="email" className="form-control mt-2" placeholder="example@example.com" name="email" value={ email } onChange={ onInputChange } />
            <input type="password" className="form-control mt-2" placeholder="password" name="password" value={ password } onChange={ onInputChange } />

            <button onClick={ onReset } className="btn btn-secondary mt-2">Reset</button>

            
        </>
    )
}
