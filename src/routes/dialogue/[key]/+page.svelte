<script>
    // socket store houses the socket.io object
    import {socket} from "$lib/stores/socketStore.js";
    // user store tracks the user's chosen username
    import {userStore} from "$lib/stores/userStore.js";
    // message store tracks the messages in the dialogue
    import {messageStore} from "$lib/stores/messageStore.js";

    // COMPONENT IMPORTS ----------
    import Meta from "$lib/components/Globals/Meta.svelte";
    import Username from "$lib/components/Forms/Username.svelte";
    import Dialogue from "$lib/components/Dialogue.svelte";

    // `dialogue` populated by endpoint -> @see './[key].js'.
    export let dialogue;

    const PAGE_TITLE = 'Dialogue';
    const PAGE_DESCRIPTION = 'Talk in secret, only people with the ID and password for this Dialogue will ever be able to find it.';

    function handleUsername(e) {
        e.preventDefault();
        if (e.target[0].value.length < 3) {
            $userStore = "";
            return;
        }
        // `e.target` is the `<form>` element, but we know that the form only has 1 element,
        // so we can confidently access `e.target[0]`
        $userStore = e.target[0].value;
        // dispatch the `dialogues:join` event with the relevant data.
        $socket.emit('dialogues:join', {username: $userStore, key: dialogue.key});
    }

    // @todo - add a control to show/hide the dialogue-header
    let collapsed = false;
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    <!-- if there's no username, we ask for one to be set -->
    {#if $userStore.length === 0}
        <Username submit={handleUsername} />
    <!-- otherwise if there *is* a username, show the dialogue -->
    {:else}
        <div class="dialogue-container">
            <div class="dialogue-header" class:collapsed>
                <span class="pre-title">Dialogue {dialogue.wid}</span>
                <h1>{dialogue.name}</h1>
                {#if dialogue.description && dialogue.description.length > 0}
                    <p id="dialogue-description" class="large">{dialogue.description}</p>
                {/if}
            </div>
            <button id="toggle-header" on:click={() => collapsed = !collapsed}>{collapsed ? 'Expand the header' : 'Collapse the header'}</button>
            <Dialogue key={dialogue.key} />
        </div>
    {/if}
</div>

<style lang="scss">
  @use '../../lib/styles/variables' as var;
    .dialogue-header {
      display: block;

      &.collapsed {
        display: none;
      }

      #dialogue-description {
        padding: var.$scale--notch-300 var.$scale--notch-400;
        background-color: rgba(var.$clr--melody, .16);
      }
    }

    #toggle-header {
      background: none;
      border: none;
      color: var.$clr--pomegranate;
      text-decoration: underline;
      font-size: var.$scale--notch-500;
      margin-top: var.$scale--notch-300;
      cursor: pointer;
    }
</style>
