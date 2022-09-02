<script>
    /**
     * This is a protected route, GET and POST requests to this route
     * check for authentication in the authStore and forward to the `login`
     * route if not authenticated.
     */

    import Meta from "$lib/components/Globals/Meta.svelte";
    import {authStore} from "../../lib/stores/authStore.js";

    const PAGE_TITLE = "Dashboard";
    const PAGE_DESCRIPTION = "Welcome to your dashboard, which gives an overview of your entire account.";

    $: console.log($authStore);
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Dashboard</h1>
</div>