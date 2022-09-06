<script>
    /**
     *
     * `<CreateDialogue />` is an example of a `Form` in the Whisper design system, and it
     * therefore makes use of the 'Form' wrapper component.
     *
     * 'CreateDialogue' is used for making a post request that will add a new 'dialogue' to
     * the Whisper DB (the API and server for this are decoupled from this front-end and exist
     * in the `whisper-api` repo).
     *
     * */

    import {goto} from "$app/navigation";
    import Form from './Form.svelte';
    import FormField from "./FormField.svelte";

    // local state to track the value of the required inputs, this allows
    // us to dynamically update the `disabled` state of the submit button.
    let name = "";
    let password = "";
    let description = "";
    $: disabled = name.length === 0 || password.length === 0;

    async function submit (e) {
        e.preventDefault();

        const formData = {};
        formData['dialogue-name'] = name;
        formData['dialogue-password'] = password;
        if (description.length > 0) formData['dialogue-description'] = description;

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/dialogue`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
            console.log(data);
        } else {
            goto('/dashboard');
        }

    }
</script>

<Form {submit} buttonText="Let's go" {disabled}>
    <!--  NAME FIELD  -->
    <FormField description="Enter a name for your dialogue, this will be visible at the top of the dialogue's page.">
        <label class="required" for="dialogue-name">Name</label>
        <input required type="text" name="dialogue-name" id="dialogue-name" bind:value={name} placeholder="e.g. general catch-up" />
    </FormField>

    <!--  DESCRIPTION FIELD  -->
    <FormField description="Add a summary for your dialogue to help people joining know what the conversation is about. ">
        <label for="dialogue-description">Description</label>
        <textarea name="dialogue-description" id="dialogue-description" rows="2" bind:value={description} placeholder="Add an optional summary or introduction for your dialogue."></textarea>
    </FormField>

    <!--  PASSWORD FIELD  -->
    <FormField description="Set a password for your Dialogue - no-one will be able to access the dialogue without this.">
        <label class="required" for="dialogue-password">Password</label>
        <input required type="password" name="dialogue-password" id="dialogue-password" bind:value={password} />
    </FormField>
</Form>
