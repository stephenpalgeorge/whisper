<script>
    import Meta from "$lib/components/Globals/Meta.svelte";
    import Login from "$lib/components/Forms/Login.svelte";

    const PAGE_TITLE = "Welcome";
    const PAGE_DESCRIPTION = "Thank you for signing up to Whisper!";
    // these props are populated by DB
    // @see ./welcome.js
    export let user = {};
    let username = user.username || "";
    let password = "";
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Welcome to Whisper</h1>
    <p class="large">
        Thanks for signing up, {user.username}. We're really glad you're here.
        You can use the form below to login, or use some of these quick links
        to access key pages in our documentation.
    </p>
    <Login bind:username bind:password />
</div>