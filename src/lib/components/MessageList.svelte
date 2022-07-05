<script>
    export let messages = [];
</script>

{#if messages.length > 0}
    <ul>
        {#each messages as message}
            <li>{message}</li>
        {/each}
    </ul>
{/if}