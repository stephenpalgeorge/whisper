<script>
    import Meta from "$lib/components/Globals/Meta.svelte";
    import Login from "$lib/components/Forms/Login.svelte";
    import {userStore} from "../../../lib/stores/userStore.js";
    import {goto} from "$app/navigation";

    const PAGE_TITLE = "Welcome";
    const PAGE_DESCRIPTION = "Thank you for signing up to Whisper!";
    let username = $userStore;
    let password = "";

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
    <h1>Welcome to Whisper</h1>
    <p class="large">
        Thanks for signing up{username ? `, ${username}` : ''}. We're really glad you're here.
        You can use the form below to login, or use some of these quick links
        to access key pages in our documentation.
    </p>
    <Login submit={login} bind:username bind:password />
</div>