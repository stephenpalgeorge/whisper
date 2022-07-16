<script>
    import {userStore} from "$lib/stores/userStore.js";

    export let messages = [];
</script>

{#if messages.length > 0}
    <ul>
        {#each messages as item}
            {#if item.type === 'chat'}
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
        padding: var.$scale--300 var.$scale--400;
        background-color: rgba(var.$clr--melody, .25);
        border-radius: var.$scale--300 var.$scale--300 var.$scale--300 0;

        &.authored {
          align-self: flex-end;
          background-color: rgba(var.$clr--armor, 1);
          color: var.$clr--alice-blue;
          border-radius: var.$scale--300 var.$scale--300 0 var.$scale--300;
        }

        &:not(:first-of-type) {
          margin-top: var.$scale--800;
        }

        .message-username {
          font-size: var.$scale--300;
          font-weight: bold;
        }

        p {
          color: inherit;
        }

        .message-timestamp {
          font-size: var.$scale--300;
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