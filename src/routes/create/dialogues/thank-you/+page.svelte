<script>
    /**
     * @url - '/create/dialogues/thank-you'
     *
     * The 'thank-you' or 'success' page for creating a new dialogue confirms to the
     * user that their dialogue was successfully created and provides some useful links
     * and information about the dialogue.
     *
     */

    import Meta from "$lib/components/Globals/Meta.svelte";
    // `dialogue` populated by endpoint -> @see './+page.server.js'.
    export let data;
    let {dialogue} = data;

    const PAGE_TITLE = "Dialogue Created";
    const PAGE_DESCRIPTION = "You created a new Dialogue - hooray. Send the ID and password out to anyone you want to be able to join.";
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Success!</h1>
    <p class="large">
        Thank you for creating a new dialogue: <mark>"{dialogue.name}"</mark>. Your dialogue ID is displayed below,
        you'll need to give this, and the password, to anyone you want to be able to join the
        conversation. <em class="clr:pomegranate">Be sure to make a note of your dialogue ID, you won't be able
        to see it again once you've left this page.</em>
    </p>

    <p>
        <mark class="lead">
            {dialogue.wid}
        </mark>
    </p>
</div>
