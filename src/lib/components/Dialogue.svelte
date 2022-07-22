<script>
    // store imports
    import {messageStore} from "$lib/stores/messageStore.js";
    import {socket} from "$lib/stores/socketStore.js";
    import {userStore} from "$lib/stores/userStore.js";
    // component imports
    import SendMessage from "$lib/components/Forms/SendMessage.svelte";
    import MessageList from "$lib/components/MessageList.svelte";

    let message = '';
    function sendMessage(e) {
        e.preventDefault();
        if (message && message.length > 0) {
            const now = new Date();
            const data = {
                message,
                username: $userStore,
                timestamp: `${now.getDate()}/${now.getMonth() + 1} - ${now.getHours()}:${now.getMinutes()}`,
                type: 'chat',
            };
            $socket.emit('dialogues:send-message', data);
            message = '';
        }
    }

    $socket.on('dialogues:update', data => {
        messageStore.update(m => [...m, data]);
    });

    $socket.on('dialogues:join', data => {
        const now = new Date();
        messageStore.update(m => [...m, {
            message: `"${data.username}" has joined the dialogue.`,
            timestamp: `${now.getDate()}/${now.getMonth() + 1} - ${now.getHours()}:${now.getMinutes()}`,
            type: 'notification',
        }]);
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