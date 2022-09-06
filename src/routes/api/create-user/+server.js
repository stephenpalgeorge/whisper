import {error} from "@sveltejs/kit";
import * as db from '$lib/database';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const formData = await request.formData();
    const dataObject = Object.fromEntries(formData);

    const res = await db.signup(dataObject);
    const data = await res.json();

    if (!res.ok) throw error(400, 'Could not create your account...sorry');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Response(JSON.stringify(data), {headers});
}
