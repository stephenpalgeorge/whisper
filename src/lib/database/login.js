/**
 * Make a post request to the API to authenticate a user.
 * The returned `res` will include any error information, the logic for which
 * is handled in the consuming context.
 * @see '/routes/auth/login.js'.
 *
 * @param data - object containing the user's data (username, password) for authentication
 * @return {Promise<Response>}
 */

export default async function login(data) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
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
