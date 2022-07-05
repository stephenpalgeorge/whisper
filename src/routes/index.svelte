<script>
    import Meta from '$lib/components/Globals/Meta.svelte';
    import Dialogue from "$lib/components/Dialogue.svelte";

    const PAGE_TITLE = "Welcome";
    const PAGE_DESCRIPTION = "The website for secret communication";
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<h1>Whisper</h1>
<Dialogue />
