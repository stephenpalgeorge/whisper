import * as db from "$lib/database";

export async function POST({ request }) {
    // turn the request's formData into an object where the input names
    // are the keys, and the input values are the object values.
    const formData = await request.formData();
    const dataObject = Object.fromEntries(formData);

    // make request to API to create the dialogue,
    // respond accordingly...
    const res = await db.createWhisper(dataObject);
    const data = await res.json();

    if (!res.ok) {
        return {
            status: 500,
        }
    }

    return {
        status: 200,
        body: {
            dialogue: data.dialogue,
        }
    }
}
