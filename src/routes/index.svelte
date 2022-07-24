<script>
    import {goto} from "$app/navigation";
    import * as db from '$lib/database';
    import Meta from '$lib/components/Globals/Meta.svelte';
    import LinkList from "$lib/components/LinkList.svelte";
    import FindWhisper from "$lib/components/Forms/FindWhisper.svelte";

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

    // data for the link-list component:
    const links = [
        { url: '/create/dialogues', title: 'Create a dialogue', description: 'Dialogues are password-protected places to talk and discuss.' },
        { url: '/create/notes', title: 'Create a note', description: 'Notes are a secure way for you to share information or make an announcement.' },
        { url: '/create/locations', title: 'Share a location', description: 'A safe way to let people know where you are, or where to meet you.' },
    ];
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Shhh...Whisper</h1>
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
    <LinkList {links} />
</div>
