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
            $socket.emit('send-message', message);
            message = '';
        }
    }

    $socket.on('chat-update', message => {
        messageStore.update(m => [...m, message]);
    });

    // onDestroy(() => $socketStore.disconnect());
</script>

<SendMessage bind:message submit={sendMessage} />
<MessageList messages={$messageStore} />
