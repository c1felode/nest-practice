import { useEffect, useState } from "react"
import { deleteUser, getUsers, type User } from "../lib/getUsers"
import { useGlobalContext } from "./AppContext"

const UserList = () => {
    const {isSubmit, setIsSubmit} = useGlobalContext()
    const [users, setUsers] = useState<User[]>([])
        const loadUsers = async () => {
            const data = await getUsers()
            setUsers(data)
        }
        const handleDelete  = async (id:number) => {
            await deleteUser(id)
            setIsSubmit(prev => !prev);
        }
        useEffect(() => {
            loadUsers()
        }, [isSubmit])
    return (
        <ul style={{color: 'white', width: 'fit-content', margin: '0 auto', marginTop: "30px"}}>
            {users.map(item => (
                <li key={item.id} style={{display: 'flex', gap: "10px"}}>
                    <h2>{item.name}</h2> - 
                    <b>{item.email}</b>
                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}

export default UserList