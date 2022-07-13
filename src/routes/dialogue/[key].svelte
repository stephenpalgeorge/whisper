<script>
    import {browser} from "$app/env";
    import {onMount, onDestroy} from "svelte";
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
        window.localStorage.setItem('name', e.target[0].value);
        $socket.emit('dialogue:join', {username, key: dialogue.key});
    }

    onMount(() => {
        username = window.localStorage.getItem("name") || "";
    });

    onDestroy(() => {
        if (browser) window.localStorage.removeItem("name");
    });
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
