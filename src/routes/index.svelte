<script>
    import {goto} from "$app/navigation";
    import * as db from '$lib/database';
    import Meta from '$lib/components/Globals/Meta.svelte';
    import FindWhisper from "$lib/components/Forms/FindWhisper.svelte";
    import Tabs from "$lib/components/UI/Tabs.svelte";

    const PAGE_TITLE = "Welcome";
    const PAGE_DESCRIPTION = "The website for secret communication";

    let whisper_id = "";
    let whisper_password = "";
    let form_progress = 1;
    let form_error = {};

    // form whisper submission handler:
    async function findWhisper(e) {
        e.preventDefault();
        const res = await db.getWhisperById(whisper_id, whisper_password);
        const data = await res.json();

        if (!res.ok) {
            // on error, set the error data to state then make sure the form is
            // on the correct step, so the user always sees the error.
            form_error = data;
            form_progress = data.origin === 'id' ? 1 : 2;
            // reset the id and password.
            whisper_id = data.origin === 'id' ? "" : whisper_id;
            whisper_password = data.origin === 'password' ? "" : whisper_password;
        } else {
            // if all is good, forward the user onto the dialogues page
            await goto(`/dialogue/${data.dialogue.key}`);
        }
    }
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Shhh... Whisper</h1>
    <p class="lead clr:aquitaine">The place for secrets.</p>
    <p>
        Share anything, have conversations and make announcements safe in the knowledge that
        nothing is tracked, none of your data is stored and you don't even need an account. You decide
        who gets access, and how long your Whispers live for.
    </p>
    <FindWhisper
            submit={findWhisper}
            bind:id={whisper_id}
            bind:password={whisper_password}
            bind:step={form_progress}
            bind:error={form_error}
    />

    <hr>

    <section>
        <h2>Create a Whisper</h2>
        <p class="large">
            Whispers come in three categories: Dialogues, Notes and Locations. Follow the links below
            to create your own Whispers and share what you need to share in secret. <a href="/create">Find out more</a>
            or chose from the list below.
        </p>
        <Tabs id="whisper-teasers" items={[
            {
                label: 'Dialogues',
                headline: "Dialogues are password-protected places to talk and discuss.",
                content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                link: { url: '/create/dialogues', label: 'Create a Dialogue' },
                default: true,
            },
            {
                label: 'Notes',
                headline: "Notes are a secure way for you to share information or make announcements.",
                content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                link: { url: '/create/notes', label: 'Create a Note' },
                default: false,
            },
            {
                label: 'Locations',
                headline: "Locations are a safe way to share where you are, or where you want to meet.",
                content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                link: { url: '/create/locations', label: 'Create a Location' },
                default: false,
            }
        ]} />
    </section>
</div>

<style lang="scss">
    @use '../lib/styles/mixins' as m;

    a {
      @include m.underline;
    }
</style>
