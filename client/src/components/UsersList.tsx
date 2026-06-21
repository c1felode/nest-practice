import { useEffect } from "react"
import { getUsers } from "../lib/getUsers"

const UserList = () => {
    useEffect(()=>{
        getUsers()
    }, [])
    return <></>
}

export default UserList