/**
 *
 * Query the API for a single 'whisper' and return the response.
 * If there are any errors (no whisper found etc) this will be included in the
 * response object and the logic for this is all handled in the consuming context
 * @see '/routes/index.svelte'
 *
 * @param id - the 'whisper' id that will be used to search the DB
 * @param password - the 'whisper' password, that will authenticate the user for this whisper
 * @return {Promise<Response>}
 *
 */

export default async function getWhisperById(id, password) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dialogue/${id}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ password }),
    });

    return res;
}
