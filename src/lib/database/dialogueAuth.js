/**
 * Query the DB to check if a user in authenticated for a particular dialogue. The dialogue
 * is found by key (from the url) and is authenticated based on the presence (or absence) of the
 * relevant `dialogue:auth` cookie.
 *
 * @param key - the dialogue `key` that will identify the dialogue in question
 * @param cookie - the `auth` cookie, that will be verified server-side to determine the user's auth status
 * @return {Promise<Response>}
 */

export default async function dialogueAuth(key, cookie) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dialogue/${key}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Cookie': cookie,
        },
    });

    return res;
}
