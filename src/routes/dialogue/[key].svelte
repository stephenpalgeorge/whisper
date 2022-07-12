<script>
    import {page} from "$app/stores";
    import {socket} from "$lib/stores/socketStore.js";

    export let dialogue;

    $socket.emit('dialogue:join', "...USER ID..., ...DIALOGUE.KEY / ID...");
</script>

<div class="page-container">
    <h1>Dialogue {$page.params.key}</h1>
</div>
