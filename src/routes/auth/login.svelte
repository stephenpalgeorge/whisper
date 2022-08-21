<script>
    import Meta from "$lib/components/Globals/Meta.svelte";
    import Login from "$lib/components/Forms/Login.svelte";
    import * as db from '$lib/database';
    import {goto} from "$app/navigation";

    import {authStore} from "$lib/stores/authStore.js";

    const PAGE_TITLE = "Login";
    const PAGE_DESCRIPTION = "Sign in to your account to be able to access everything that Whisper has to offer.";

    let username = "";
    let password = "";
    let form_error = {};


    async function login(e) {
        e.preventDefault();
        const res = await db.login({username, password});
        const data = await res.json();

        if (!res.ok) {
            username = "";
            password = "";
            form_error = data;
        } else {
            // set auth stuff from response
            $authStore = data;
            // forward to the user's dashboard
            await goto('/dashboard');
        }
    }
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Login to ...Whisper</h1>
    <p class="large">Need an account? <a href="/auth/signup">Sign up here</a></p>
    <Login submit={login} bind:username bind:password bind:error={form_error} />
</div>
