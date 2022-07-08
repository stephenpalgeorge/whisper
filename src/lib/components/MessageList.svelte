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

<style lang="scss">
    @use '../styles/variables' as var;

    ul {
      list-style-type: none;
      width: 100%;
      display: flex;
      flex-direction: column;

      li {
        width: max-content;
        max-width: 80%;
        padding: var.$scale--300 var.$scale--400;
        background-color: rgba(var.$clr--melody, .25);
        border-radius: var.$scale--300 var.$scale--300 var.$scale--300 0;

        &:not(:first-of-type) {
          margin-top: var.$scale--200;
        }
      }
    }
</style>