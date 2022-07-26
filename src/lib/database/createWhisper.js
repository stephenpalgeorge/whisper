/**
 * Make a post request to the API to add a new whisper to the DB.
 * The returned `res` will include any error information, the logic for which
 * is handled in the consuming context.
 * @see '/routes/create/dialogues/thank-you.js'.
 *
 * @param data - object containing the new whisper's data (name, password etc...)
 * @return {Promise<Response>}
 */

export default async function createWhisper(data) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dialogue`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res;
}
