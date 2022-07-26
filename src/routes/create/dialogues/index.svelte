<script>
    /**
     * @url - '/create/dialogues'
     *
     * The 'Create Dialogues' page is home for a simple form that allows the user
     * to create a new dialogue.
     *
     */

    import Meta from "$lib/components/Globals/Meta.svelte";
    import CreateDialogue from "$lib/components/Forms/CreateDialogue.svelte";

    const PAGE_TITLE = 'Create a dialogues';
    const PAGE_DESCRIPTION = 'Setup a new dialogues and start the conversation.';
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