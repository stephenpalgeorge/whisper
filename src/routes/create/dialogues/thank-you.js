export async function post({ request }) {
    const formData = await request.formData();
    const dataObject = Object.fromEntries(formData);

    // make request to API to create the dialogue,
    // respond accordingly...
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dialogue`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(dataObject),
    });

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