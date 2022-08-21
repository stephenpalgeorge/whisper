/**
 * Make a post request to the API to create a new user.
 * The returned `res` will include any error information, the logic for which
 * is handled in the consuming context.
 * @see '/routes/auth/welcome.js'.
 *
 * @param data - object containing the user's data (email, username, password) for their account
 * @return {Promise<Response>}
 */

export default async function signup(data) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
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
