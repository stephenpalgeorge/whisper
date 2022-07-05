<script>
    export let message;
    export let submit;
</script>

<form on:submit={submit}>
    <label for="send-message">Send a message to the chat</label>
    <input type="text" name="send-message" id="send-message" bind:value={message} />
    <button type="submit">Send</button>
</form>