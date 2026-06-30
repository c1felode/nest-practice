const API_URL = 'localhost:3000';

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface NestValidationError {
    statusCode: number;
    message: string[];
    error: string;
}

export type ApiResponse<T> = 
    | { success: true; data: T }
    | { success: false; errors: string[] };

export async function getUsers(): Promise<User[]> {
    try {
        const res = await fetch(`http://${API_URL}/users`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }   
        return await res.json();
    }
    catch (err) {
        console.error(err);
        alert(err instanceof Error ? err.message : 'Ошибка загрузки пользователей');
        return [];
    }
}

export async function addUser(name: string, email: string): Promise<ApiResponse<User>> {
    try {
        const res = await fetch(`http://${API_URL}/users`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        // Если сервер вернул ошибку
        if (!res.ok) {
            if (res.status === 400) {
                // Извлекаем массив ошибок из class-validator
                const errorData: NestValidationError = await res.json();
                alert(`Ошибка валидации:\n${errorData.message.join('\n')}`);
                return { success: false, errors: errorData.message };
            }
            throw new Error(`HTTP error: ${res.status}`);
        }

        // Если всё успешно
        const result = await res.json();
        console.log('Success', result);
        return { success: true, data: result };
    }
    catch (err) {
        console.error(err);
        const fallbackMsg = err instanceof Error ? err.message : 'Произошла неизвестная ошибка';
        alert(fallbackMsg);
        return { success: false, errors: [fallbackMsg] };
    }
}

export async function deleteUser(id: number): Promise<boolean> {
    try {
        const res = await fetch(`http://${API_URL}/users/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        return true;
    }
    catch (err) {
        console.error(err);
        alert(err instanceof Error ? err.message : 'Не удалось удалить пользователя');
        return false;
    }
}
