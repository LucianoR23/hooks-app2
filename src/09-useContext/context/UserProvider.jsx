import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 23,
//     name: 'Luciano',
//     email: 'lr23@aol.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        // <UserContext.Provider value={{ user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
