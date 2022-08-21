import * as db from '$lib/database';

export async function post({ request }) {
    const formData = await request.formData();
    const dataObject = Object.fromEntries(formData);

    const res = await db.signup(dataObject);
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
        return {
            status: 400,
        }
    }

    return {
        status: 200,
        body: {
            user: data.user,
        }
    }
}
