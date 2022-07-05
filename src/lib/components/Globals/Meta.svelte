<script>
    export let title;
    export let description;
</script>

<svelte:head>
    <meta name="description" content="{description}" />
    <meta name="twitter:card" content="summary" />
    <meta property="twitter:description" content="{description}" />
    <meta property="twitter:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:title" content="{title}" />
    <title>{title} - Whisper</title>
</svelte:head>