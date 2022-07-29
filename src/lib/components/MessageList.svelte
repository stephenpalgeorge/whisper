<script>
    /**
     *
     * `<MessageList />` is a simple presentational component that displays a collection
     * of messages in a list.
     *
     * Messages are styled depending on their `type`. Supported types are 'chat' & 'notification'.
     *
     * */

    import {userStore} from "$lib/stores/userStore.js";

    export let messages = [];

    function scrollHandler() {
        // for each message, check how close it is to the top and adjust the opacity accordingly
        const messages = Array.from(document.querySelectorAll('li[class^="message"]'));
        messages.forEach(m => {
            const { top } = m.getBoundingClientRect();
            if (top <= 150) {
                m.style.opacity = `${(top - 50) / 100}`;
            }
        });
    }
</script>

<svelte:window on:scroll={scrollHandler} />

{#if messages.length > 0}
    <ul class="message-list">
        {#each messages as item}
            {#if item.type === 'chat'}
                <!-- the `authored` class is applied if the current user is the author -->
                <li data-author={item.username} class:authored={item.username === $userStore} class="message-{item.type}">
                    <span class="message-username">{item.username}</span>
                    <p>{item.message}</p>
                    <span class="message-timestamp">{item.timestamp}</span>
                </li>
            {:else if item.type === 'notification'}
                <li data-author={item.username} class="message-{item.type}">
                    <p>{item.message} <span>({item.timestamp})</span></p>
                </li>
            {/if}
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

      li.message-chat {
        position: relative;
        width: max-content;
        max-width: 80%;
        min-width: 6rem;
        padding: var.$scale--notch-200 var.$scale--notch-400;
        background-color: rgba(var.$clr--melody, .25);
        border-radius: var.$scale--notch-300 var.$scale--notch-300 var.$scale--notch-300 0;

        &.authored {
          align-self: flex-end;
          background-color: rgba(var.$clr--armor, 1);
          color: var.$clr--alice-blue;
          border-radius: var.$scale--notch-300 var.$scale--notch-300 0 var.$scale--notch-300;
        }

        &:not(:first-of-type) {
          margin-top: var.$scale--notch-700;
        }

        .message-username {
          font-size: var.$scale--notch-300;
          font-weight: bold;
          display: block;
          margin-bottom: math.div(var.$scale--notch-100, 2);
        }

        p {
          color: inherit;
          line-height: 1.5;
        }

        .message-timestamp {
          font-size: var.$scale--notch-300;
          color: var.$clr--approaching-dusk;
          position: absolute;
          bottom: 0;
          left: 0;
          transform: translateY(140%);
        }

        .authored .message-timestamp {
          left: unset;
          right: 0;
        }
      }

      li.message-notification {
        width: 100%;

        p {
          color: var.$clr--approaching-dusk;
          font-style: italic;
        }

        span {
          color: var.$clr--aquitaine;
        }
      }
    }
</style>