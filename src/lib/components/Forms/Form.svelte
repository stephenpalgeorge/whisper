<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let action = "";
    export let method = "POST";
    export let buttonText = "Submit";
    export let disabled = false;
    export let submit = function (event) {
        event.preventDefault();
        const data = new FormData(formRef);
        // form data will be available as an array at `event.detail.entries`
        // in the parent context.
        dispatch('w-submit', { entries: Array.from(data.entries()) });
    }

    let formRef;
</script>

{#if action && action.length > 0}
    <form {action} {method} bind:this={formRef}>
        <slot></slot>
        <button {disabled} type="submit">{buttonText}</button>
    </form>
{:else}
    <form on:submit={submit} bind:this={formRef}>
        <slot></slot>
        <button {disabled} type="submit">{buttonText}</button>
    </form>
{/if}

<style lang="scss">
    @use '../../styles/mixins' as m;
    @use '../../styles/variables' as var;

    form {
      @include m.form-base;
      padding: var.$scale--600 var.$scale--500;
      border: 1px solid var.$clr--alice-blue;
      box-shadow: 0 .5rem .5rem 0 rgba(var.$clr--eight-ball, .24);

      button[type="submit"] {
        margin-top: var.$scale--800;
        padding: var.$scale--400 var.$scale--900;
        border: none;
        background: var.$clr--aquitaine;
        font-weight: bold;
        color: var.$clr--alice-blue;
        font-size: var.$scale--500;
        cursor: pointer;

        transition: background-color var.$animation-duration--base ease-out;
        &:hover {
          background-color: darken(var.$clr--aquitaine, 10%);
        }

        &:disabled {
          background-color: var.$clr--armor;
          pointer-events: none;
        }
      }
    }
</style>
