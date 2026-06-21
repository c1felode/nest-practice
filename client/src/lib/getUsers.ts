const API_URL = 'localhost:3000'

export interface User {
    id: number,
    name: string,
    email: string
}

export async function getUsers(): Promise<User[]> {
    try {
        const res = await fetch(`http://${API_URL}/users`)
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }   
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (err) {
        console.error(`fetch error: ${err}`)
        return []
    }
}
