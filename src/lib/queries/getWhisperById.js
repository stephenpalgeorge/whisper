export default async function getWhisperById(id, password) {
    const res = await window.fetch(`${import.meta.env.VITE_API_URL}/api/dialogue/${id}/auth`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ password }),
    });

    return res;
}
