<script>
    import Send from "$lib/components/Icons/Send.svelte";

    export let message;
    export let submit;
    $: disabled = message.length <= 0;
</script>

<form on:submit={submit}>
    <label class="hidden" for="send-message">Send a message to the chat</label>
    <input type="text"name="send-message" id="send-message" bind:value={message} placeholder="Write something great..." />
    <button class="icon-button" type="submit" {disabled}>
        <Send color={disabled ? "#BECBD6" : "#FFF"} />
    </button>
</form>

<style lang="scss">
    @use '../../styles/mixins' as m;

    form {
      @include m.inline-form;
    }
</style>