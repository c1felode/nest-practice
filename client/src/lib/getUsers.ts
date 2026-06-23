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
        return data
    }
    catch (err) {
        console.error(`fetch error: ${err}`)
        return []
    }
}

export async function addUser(name: string, email: string) {
    try {
        const res = await fetch(`http://${API_URL}/users`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }

        const result = await res.json();
        console.log('Success', result)
    }

    catch (err) {
        console.error('Request error', err)
    }
}
