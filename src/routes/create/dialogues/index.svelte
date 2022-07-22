<script>
    import Meta from "$lib/components/Globals/Meta.svelte";
    import CreateDialogue from "$lib/components/Forms/CreateDialogue.svelte";

    const PAGE_TITLE = 'Create a dialogues';
    const PAGE_DESCRIPTION = 'Setup a new dialogues and start the conversation.';
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Create a Dialogue</h1>
    <p class="large">
        Add some blurb here.
    </p>
    <CreateDialogue />
</div>