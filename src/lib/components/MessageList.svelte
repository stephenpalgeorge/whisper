<script>
    /**
     *
     * `<MessageList />` is a simple presentational component that displays a collection
     * of messages in a list.
     *
     * Messages are styled depending on their `type`. Supported types are 'chat' & 'notification'.
     *
     * */

    import Markdown from "markdown-it";
    import Message from "./Message.svelte";

    export let messages = [];
    // we want to reverse the array, so the latest message always appears at the top,
    // but we can't just call `.reverse()` on the original `messages` array since `reverse`
    // is destructive and causes the order of things to get messed up. So we create a copy,
    // which can then safely reverse.
    $: messageList = [...messages];

    const md = new Markdown().enable(['emphasis', 'link']).disable(['blockquote', 'heading']);

    function scrollHandler() {
        // for each message, check how close it is to the top and adjust the opacity accordingly
        const messages = Array.from(document.querySelectorAll('li[class^="message"]'));
        messages.forEach(m => {
            const { top } = m.getBoundingClientRect();
            if (top <= 200) {
                m.style.opacity = `${(top - 100) / 100}`;
            }
        });
    }
</script>

<svelte:window on:scroll={scrollHandler} />

{#if messages.length > 0}
    <ul class="message-list">
        {#each messageList.reverse() as item}
            <Message data={item} />
        {/each}
    </ul>
{/if}

<style lang="scss">
    @use 'sass:math';
    @use '../styles/variables' as var;

    ul {
      list-style-type: none;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
</style>