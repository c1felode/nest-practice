'use client'
import { useState } from "react"
import { addUser } from "../lib/getUsers"

import { useGlobalContext } from './AppContext';

const AddUsers = () => {
    const {isSubmit, setIsSubmit} = useGlobalContext()
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!name || !email) return;
        await addUser(name, email);
        setIsSubmit((prev) => !prev);

        setName('')
        setEmail('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit">Add new user</button>
            </form>
        </div>
    )
}

export default AddUsers