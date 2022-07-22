<script>
    import {socket} from "$lib/stores/socketStore.js";
    import {userStore} from "$lib/stores/userStore.js";

    import Username from "$lib/components/Forms/Username.svelte";
    import Dialogue from "$lib/components/Dialogue.svelte";
    import Meta from "$lib/components/Globals/Meta.svelte";

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

        $userStore = e.target[0].value;
        $socket.emit('dialogues:join', {username: $userStore, key: dialogue.key});
    }
</script>

<Meta title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

<div class="page-container">
    {#if $userStore.length === 0}
        <Username submit={handleUsername} />
    {:else}
        <div class="dialogue-container">
            <span class="pre-title">Dialogue {dialogue.wid}</span>
            <h1>{dialogue.name}</h1>
            <Dialogue />
        </div>
    {/if}
</div>
