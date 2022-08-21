<script>
    import Form from "$lib/components/Forms/Form.svelte";
    import FormField from "$lib/components/Forms/FormField.svelte";

    export let email = "";
    export let username = "";
    export let password = "";

    $: disabled = email.length === 0 || username.length === 0 || password.length === 0;
</script>

<Form action="/auth/welcome" buttonText="Sign up" {disabled}>
    <FormField>
        <label for="signup-email">Email address</label>
        <input type="email" name="signup-email" id="signup-email" bind:value={email} />
    </FormField>

    <FormField>
        <label for="signup-username">Username</label>
        <input type="text" name="signup-username" id="signup-username" bind:value={username} />
    </FormField>

    <FormField>
        <label for="signup-password">Password</label>
        <input type="password" name="signup-password" id="signup-password" bind:value={password} />
    </FormField>
</Form>
