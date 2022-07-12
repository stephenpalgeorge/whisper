export default async function getWhisperById(id, password) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dialogue/${id}/auth`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({ password }),
    });

    return res;
}
