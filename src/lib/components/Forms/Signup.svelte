<script>
    import Form from "$lib/components/Forms/Form.svelte";
    import FormField from "$lib/components/Forms/FormField.svelte";
    import {userStore} from "../../stores/userStore.js";
    import {goto} from "$app/navigation";

    export let email = "";
    export let username = "";
    export let password = "";

    $: disabled = email.length === 0 || username.length === 0 || password.length === 0;

    async function submit(e) {
        e.preventDefault();
        console.log('submit function');
        const formData = new FormData();
        formData.append('signup-email', email);
        formData.append('signup-username', username);
        formData.append('signup-password', password);

        const res = await fetch('/api/create-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData,
        });

        const {user} = await res.json();
        // save username stuff to the user store and forward to welcome page
        $userStore = user.username;
        goto('/auth/welcome');
    }
</script>

<Form {submit} buttonText="Sign up" {disabled}>
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
