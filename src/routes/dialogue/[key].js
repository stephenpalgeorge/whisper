import getSSRCookie from "$lib/utils/getSSRCookie.js";

export async function get({ params, request }) {
    const authCookie = getSSRCookie('dialogue:auth', request);
    if (authCookie.length !== 1) {
        return {
            status: 403,
        }
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dialogue/${params.key}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json',
            'Cookie': authCookie[0],
        },
    });

    const data = await res.json();

    if (!res.ok) {
        return {
            status: 404,
        }
    }

    return {
        status: 200,
        body: {
            dialogue: data.dialogue,
        }
    }
}
