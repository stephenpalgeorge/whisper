<script>
    import Meta from '$lib/components/Globals/Meta.svelte';
    import * as db from '$lib/queries';
    import FindWhisper from "$lib/components/Forms/FindWhisper.svelte";

    const PAGE_TITLE = "Welcome";
    const PAGE_DESCRIPTION = "The website for secret communication";

    let whisper_id = "";
    let whisper_password = "";
    let form_progress = 1;
    let form_error = {};
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
            console.log(data);
        }
    }
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <FindWhisper
            submit={findWhisper}
            bind:id={whisper_id}
            bind:password={whisper_password}
            bind:step={form_progress}
            bind:error={form_error}
    />
</div>
