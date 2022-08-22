<script context="module">
    import {page} from "$app/stores";
</script>

<script>
    import Meta from "$lib/components/Globals/Meta.svelte";
    import LinkList from "$lib/components/UI/LinkList.svelte";

    // data for the link-list component.
    const links = [
        { url: '/', title: 'Go home', description: 'Go back to the homepage and create or search for a whisper.' },
        { url: '/contact', title: 'Get in touch', description: 'Facing an issue you can\'t resolve? Let us know and we\'ll do our best to fix it.' },
        { url: '/about', title: 'More about Whisper', description: 'Want to know more about us? This page will fill you in.' },
    ];
</script>

<Meta title={`${$page.status} Error`} description="Something went wrong..." />

<div class="page-container">
    <section>
        <h1>Oops..!</h1>
        <h2>{$page.status} Error.</h2>
        {#if $page.status === 404}
            <p>
                <strong>Sorry, we couldn't find that page.</strong><br />
                It might have moved, or there could be a mistake in the URL?
            </p>
        {:else if $page.status === 403}
            <p>
                <strong>Sorry, we can't show you that.</strong><br />
                You might not be properly authenticated for this whisper, or it could have expired
                and no longer be available.
            </p>
        {:else if $page.status === 500}
            <p>
                <strong>Oh no! Something went wrong.</strong><br />
                Sorry we can't give you more information, but something broke on our end. Try again,
                and if the problem persists, do <a href="/contact">get in touch.</a>
            </p>
        {:else}
            <p>
                <strong>Sorry, something has gone wrong!</strong><br />
                There's a problem our end, we're sorry. Please try again in a bit, when hopefully
                we'll have sorted things out.
            </p>
        {/if}
    </section>

    <section>
        <h2>Useful links</h2>
        <LinkList {links} />
    </section>
</div>
