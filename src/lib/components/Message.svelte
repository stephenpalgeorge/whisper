<script>
    import {userStore} from "$lib/stores/userStore.js";
    import Markdown from "markdown-it";
    export let data;

    const md = new Markdown().enable(['emphasis', 'link']).disable(['blockquote', 'heading']);
    $: message = md.render(data.message);
</script>

{#if data.type === 'chat'}
    <!-- the `authored` class is applied if the current user is the author -->
    <li data-author={data.username} class:authored={data.username === $userStore} class="message-{data.type}">
        <span class="message-username">{data.username}</span>
        {@html message}
        <time class="message-timestamp">{data.timestamp}</time>
    </li>
{:else if data.type === 'notification'}
    <li data-author={data.username} class="message-{data.type}">
        {@html message} <time>({data.timestamp})</time>
    </li>
{/if}

<style lang="scss">
  @use 'sass:math';
  @use '../styles/variables' as var;
  @use '../styles/mixins' as m;

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
    margin-top: var.$scale--notch-700;
    width: 100%;
    border-bottom: 1px dashed var.$clr--fade;
    display: flex;
    justify-content: space-between;

    span {
      color: var.$clr--aquitaine;
    }
  }

  :global {
    li.message-chat {
      p {
        color: inherit;
        line-height: 1.5;
      }

      a {
        color: var.$clr--pomegranate;
        @include m.underline;
      }

      code {
        background-color: rgba(var.$clr--armor, .2);
        padding-inline: .25em;
        font-family: var.$font--monospace;
      }

      &.authored {
        a {
          color: #fff;
        }

        code {
          background-color: rgba(var.$clr--alice-blue, .4);
        }
      }
    }

    li.message-notification {
      p, time {
        color: var.$clr--approaching-dusk;
        font-style: italic;
      }
    }
  }
</style>