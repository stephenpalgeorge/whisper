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

    import Form from './Form.svelte';
    import FormField from "./FormField.svelte";

    // local state to track the value of the required inputs, this allows
    // us to dynamically update the `disabled` state of the submit button.
    let name = "";
    let password = "";
    $: disabled = name.length === 0 || password.length === 0;
</script>

<Form action="/create/dialogues/thank-you" {disabled}>
    <!--  NAME FIELD  -->
    <FormField description="Enter a name for your dialogue, this will be visible at the top of the dialogue's page.">
        <label class="required" for="dialogue-name">Name</label>
        <input required type="text" name="dialogue-name" id="dialogue-name" bind:value={name} placeholder="e.g. general catch-up" />
    </FormField>

    <!--  DESCRIPTION FIELD  -->
    <FormField description="Add a summary for your dialogue to help people joining know what the conversation is about. ">
        <label for="dialogue-description">Description</label>
        <textarea name="dialogue-description" id="dialogue-description" rows="2" placeholder="Add an optional summary or introduction for your dialogue."></textarea>
    </FormField>

    <!--  PASSWORD FIELD  -->
    <FormField description="Set a password for your Dialogue - no-one will be able to access the dialogue without this.">
        <label class="required" for="dialogue-password">Password</label>
        <input required type="password" name="dialogue-password" id="dialogue-password" bind:value={password} />
    </FormField>
</Form>
