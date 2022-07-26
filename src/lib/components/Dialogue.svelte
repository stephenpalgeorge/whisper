<script>
    // STORES ----------
    // the message store is used for keeping track of an array of messages.
    import {messageStore} from "$lib/stores/messageStore.js";
    // the socket store houses the `socket-io` client object. We hold this in a
    // store so that we can read it and add events to it from within any component file.
    import {socket} from "$lib/stores/socketStore.js";
    // user store keeps track of the user's chosen username (given when they join a dialogue).
    import {userStore} from "$lib/stores/userStore.js";
    // COMPONENTS ------
    import SendMessage from "$lib/components/Forms/SendMessage.svelte";
    import MessageList from "$lib/components/MessageList.svelte";

    export let key;
    let message = '';

    /**
     * Construct a `message` object and use the socket.io client to emit a `dialogues:send-message`
     * event that passes that data to the server.
     *
     * @param e {Event} - form submission event.
     */
    function sendMessage(e) {
        e.preventDefault();
        if (message && message.length > 0) {
            // construct an object with the message and all of its associated metadata.
            const now = new Date();
            const data = {
                message,
                username: $userStore,
                timestamp: `${now.getDate()}/${now.getMonth() + 1} - ${now.getHours()}:${now.getMinutes()}`,
                type: 'chat',
                key,
            };
            // send that object along as the payload of the `dialogue:send-message` event.
            $socket.emit('dialogues:send-message', data);
            // reset the form.
            message = '';
        }
    }

    // `dialogues:update` is the event the client receives back from the server after a message
    // has been received by the server. We simply append the new message to the value of the message store.
    $socket.on('dialogues:update', data => {
        messageStore.update(m => [...m, data]);
    });

    // `dialogues:join` runs when a new user joins a dialogue. This also simply appends a message to the store,
    // but note the different `type` - this is a notification. This type difference is used to differentiate
    // the styling of the messages as well (see `./MessageList.svelte` for the implementation).
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
