<script>
    /**
     *
     * <Form></Form> is a wrapper component for any form in the design system (other than the
     * 'inline' forms, which are their own exception.
     * It provides some common functionality around form submission, some common styling and a
     * common API for creating forms across the app.
     *
     * */

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    // PROPS --------------------
    // if `action` is set, this will be used for form submissions, otherwise
    // we fall back to the custom `submit` handler (which has a default, so in theory,
    // submitting the form will *always* do something...).
    export let action = "";
    // only used if `action` is set.
    export let method = "POST";
    export let buttonText = "Submit";
    // `disabled` determines weather or not the form can be submitted. This is achieved
    // by toggling the `disabled` attribute on the submit button.
    export let disabled = false;
    // `submit` is a function that is called when the form is submitted. The default value
    // dispatches a custom event, which should expose all the formData to the parent context.
    export let submit = function (event) {
        event.preventDefault();
        const data = new FormData(formRef);
        // form data will be available as an array at `event.detail.entries`
        // in the parent context.
        dispatch('w-submit', { entries: Array.from(data.entries()) });
    }

    let formRef;
</script>

<!-- submit the form with the `action` -->
{#if action && action.length > 0}
    <form {action} {method} bind:this={formRef}>
        <slot></slot>
        <button {disabled} type="submit">{buttonText}</button>
    </form>
<!-- submit the form with the `submit` handler function -->
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
      // barely noticeable border, just lifts it off the background slightly
      border: 1px solid var.$clr--alice-blue;
      // @todo consider changing this to match the h1 text-shadow style a bit more?
      box-shadow: 0 .5rem .5rem 0 rgba(var.$clr--eight-ball, .24);

      button[type="submit"] {
        margin-top: var.$scale--800;
        padding: var.$scale--400 var.$scale--900;
        border: none;
        border-radius: var.$border-radius;
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

        &:focus {
          outline: .25rem solid rgba(var.$clr--aquitaine, .4);
          outline-offset: .125rem;
        }
      }
    }
</style>
