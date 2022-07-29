<script>
    /**
     *
     * `<SendMessage />` is a simple inline form.
     * It is also a 'presentational' component, in the sense that its purpose is simple to
     * display the UI - the logic of what should happen to the data on submission is housed
     * and passed in from the parent context.
     *
     * */

    // ICON IMPORTS ----------
    import Send from "$lib/components/Icons/Send.svelte";

    // PROPS -----------------
    // neither of the props below have default values, and are therefore
    // both required.
    export let message;
    export let submit;
    // only allow the form to be submitted if there is *something* in the message input.
    // the value of `disabled` will be recalculated every time `message` changes.
    $: disabled = message.length <= 0;
</script>

<form on:submit={submit}>
    <!-- hidden label for a11y purposes, context and placeholder text will give meaning to most users -->
    <label class="hidden" for="send-message">Send a message to the chat</label>
    <input type="text"name="send-message" id="send-message" bind:value={message} placeholder="Write something great..." />
    <button class="icon-button" type="submit" {disabled}>
        <Send color={disabled ? "#BECBD6" : "#FFF"} />
    </button>
</form>

<style lang="scss">
    @use '../../styles/variables' as var;
    @use '../../styles/mixins' as m;

    form {
      @include m.inline-form;
      position: sticky;
      top: var.$scale--notch-600;
      background-color: #fff;
      z-index: 1;
    }
</style>
