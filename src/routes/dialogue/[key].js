import getSSRCookie from "$lib/utils/getSSRCookie.js";
import * as db from '$lib/database';

export async function get({ params, request }) {
    // we send the auth cookie along manually here because of the server-side
    // rendering, which doesn't know what cookies are in the browser, so we can't rely
    // on `credentials: 'include'` (which only works in the browser).
    // @see '/lib/utils/getSRRCookie.js';
    //
    const authCookie = getSSRCookie('dialogue:auth', request);
    if (authCookie.length !== 1) {
        return {
            status: 403,
        }
    }

    const res = await db.dialogueAuth(params.key, authCookie[0]);
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
