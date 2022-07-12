<script>
    import {socket} from "$lib/stores/socketStore.js";
    import Username from "$lib/components/Forms/Username.svelte";

    export let dialogue;
    let username = "";
    function handleUsername(e) {
        e.preventDefault();
        if (e.target[0].value.length < 3) {
            username = "";
            return;
        }

        username = e.target[0].value;
    }

    $socket.emit('dialogue:join', "...USER ID..., ...DIALOGUE.KEY / ID...");
</script>

<div class="page-container">
    {#if username.length === 0}
    <!--  USERNAME FORM  -->
        <Username submit={handleUsername} />
    {:else}
        <div class="dialogue-container">
            <span class="pre-title">Dialogue {dialogue.wid}</span>
            <h1>{dialogue.name}</h1>
        </div>
    {/if}
</div>

<style lang="scss">

</style>
