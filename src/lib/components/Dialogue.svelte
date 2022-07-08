<script>
    // store imports
    import {messageStore} from "$lib/stores/messageStore.js";
    import {socket} from "$lib/stores/socketStore.js";
    // component imports
    import SendMessage from "$lib/components/Forms/SendMessage.svelte";
    import MessageList from "$lib/components/MessageList.svelte";

    let message = '';
    function sendMessage(e) {
        e.preventDefault();
        if (message && message.length > 0) {
            $socket.emit('dialogue:send-message', message);
            message = '';
        }
    }

    $socket.on('dialogue:update', message => {
        messageStore.update(m => [...m, message]);
    });
</script>

<section class="dialogue">
    <SendMessage bind:message submit={sendMessage} />
    <MessageList messages={$messageStore} />
</section>

<style lang="scss">
    .dialogue {
      margin-inline: auto;
      width: min(100%, 45rem);
    }
</style>