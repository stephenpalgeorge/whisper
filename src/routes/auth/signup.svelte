<script>
    import Meta from "$lib/components/Globals/Meta.svelte";
    import Signup from "$lib/components/Forms/Signup.svelte";

    const PAGE_TITLE = "Create an account";
    const PAGE_DESCRIPTION = "Sign up for a Whisper account to be able to create and manage dialogues, notices and locations.";

    let email = "";
    let username = "";
    let password = "";
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <h1>Create an account</h1>
    <p class="large">
        A Whisper account means you have full access to all of our features. You'll
        be able to create and manage dialogues, notices and locations.
    </p>
    <p class="em large">Already have an account? <a href="/auth/signup">Login here</a></p>
    <Signup bind:username bind:email bind:password />
</div>