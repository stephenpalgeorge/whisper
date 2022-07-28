<script>
    /**
     * @url - '/invite/:wid'
     *
     * The 'Invite' page is a quicker/easier route into a whisper for the user.
     * The page contains a simple password form which, if correct, will then
     * forward the user onto the whisper in question (identified by the wid in
     * the url params).
     *
     */

    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import * as db from '../../lib/database';
    import Meta from "$lib/components/Globals/Meta.svelte";
    import PasswordAuth from "$lib/components/Forms/PasswordAuth.svelte";

    const WID = $page.params.wid;

    const PAGE_TITLE = `Invitation to "${WID}"`;
    const PAGE_DESCRIPTION = 'Enter the correct password to be forwarded straight to the whisper that you\'re looking for.';

    let password = "";
    let form_error = {};
    let formSubmit = async (e) => {
        e.preventDefault();
        const res = await db.getWhisperById(WID, password);
        const data = await res.json();

        if (!res.ok) {
            form_error = data;
            password = "";
        } else {
            await goto(`/dialogue/${data.dialogue.key}`);
        }
    }
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Invitation to "{WID}"</h1>
    <p class="large">
        Don't shout about it...but you've been invited to join the whisper with id <mark>{WID}</mark>.
        Just enter the password below, and you'll be taken straight there.
    </p>

    <PasswordAuth bind:password submit={formSubmit} bind:error={form_error} />
</div>
