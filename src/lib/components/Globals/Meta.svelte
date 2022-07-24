<script>
    /**
     *
     * The `<Meta />` component is designed to handle all the meta tags that
     * each page might want to include. *Every* `.svelte` file within the `/routes`
     * directory should render this component and thus give the page an appropriate
     * title and description for SEO purposes (amongst other things).
     *
     * */

    // PROPS -----------------
    export let title;
    export let description;
</script>

<svelte:head>
    <!-- TWITTER TAGS -->
    <meta name="twitter:card" content="summary" />
    <meta property="twitter:description" content="{description}" />
    <meta property="twitter:title" content="{title}" />
    <!-- OPEN GRAPH (FACEBOOK) TAGS -->
    <meta property="og:description" content="{description}" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:title" content="{title}" />
    <!-- BROWSER TAGS -->
    <meta name="description" content="{description}" />
    <title>{title} - Whisper</title>
</svelte:head>
