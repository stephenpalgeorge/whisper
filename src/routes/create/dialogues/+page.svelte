<script>
    /**
     * @url - '/create/dialogues'
     *
     * The 'Create Dialogues' page is home for a simple form that allows the user
     * to create a new dialogue.
     *
     */

    import {browser} from "$app/env";
    import {goto} from "$app/navigation";

    import Meta from "$lib/components/Globals/Meta.svelte";
    import CreateDialogue from "$lib/components/Forms/CreateDialogue.svelte";
    import {authStore} from "../../../lib/stores/authStore.js";

    const PAGE_TITLE = 'Create a dialogues';
    const PAGE_DESCRIPTION = 'Setup a new dialogues and start the conversation.';

    // This is a protected route - only authenticated users should be able to load this
    // page, everyone else gets redirected to `/auth/login`.
    async function authenticate() {
        console.log($authStore);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/authorise`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${$authStore.authToken}`,
                'Accept': 'application/json',
            },
        });

        if (!res.ok) {
            goto('/auth/login');
        }
    }

    $: if (!authStore.user && browser) {
        authenticate();
    }
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Create a Dialogue</h1>
    <p class="large">
        A dialogue is a conversation, a meeting of minds. By creating a dialogue you are
        creating a space for open and honest communication. Only those to whom you give the
        password will be able to take part and, just like a real-life conversation, nothing
        is tracked, analysed or stored in a database...
    </p>
    <CreateDialogue />
</div>