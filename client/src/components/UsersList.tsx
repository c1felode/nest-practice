import { useEffect, useState } from "react"
import { getUsers, type User } from "../lib/getUsers"

const UserList = () => {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        const loadUsers = async () => {
            const data = await getUsers()
            console.log(data)
            setUsers(data)
        }

        loadUsers()
    }, [])
    return (
        <ul style={{color: 'white', width: 'fit-content', margin: '0 auto', marginTop: "30px"}}>
            {users.map(item => (
                <li key={item.id} style={{display: 'flex', gap: "10px"}}>
                    <h2>{item.name}</h2> - 
                    <b>{item.email}</b>
                </li>
            ))}
        </ul>
    )
}

export default UserList