<script>
    /**
     * This is a protected route, GET and POST requests to this route
     * check for authentication in the authStore and forward to the `login`
     * route if not authenticated.
     */

    import {browser} from "$app/env";
    import {page} from "$app/stores";

    import Meta from "$lib/components/Globals/Meta.svelte";
    import {authStore} from "../../lib/stores/authStore.js";

    const PAGE_TITLE = "Dashboard";
    const PAGE_DESCRIPTION = "Welcome to your dashboard, which gives an overview of your entire account.";

    async function getUser() {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${$authStore.authToken || ''}`,
            }
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) $authStore = data;
        else {
            console.log('error: ', data);
        }
    }
    $: if ((!$authStore.user && browser) || $page.url.searchParams.get('nd')) {
        // try and authenticate by fetching user, if all tokens are expired, redirect to login
        // `getUser` updates the authStore, so the template reads all relevant values from there
        getUser();
    }
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Dashboard</h1>
    {#if $authStore.user}
        <p>{$authStore.user.username}</p>
    {:else}
        <p>loading...</p>
    {/if}
</div>