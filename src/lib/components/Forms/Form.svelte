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
    // a boolean operator which affects the layout of the form to
    // put grouped elements onto the same line.
    export let compact = false;
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
    <form {action} {method} bind:this={formRef} class:compact>
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
      padding: var.$scale--notch-600 var.$scale--notch-500;
      border: .125rem solid var.$clr--eight-ball;
      box-shadow: .125rem .125rem 0 .125rem #fff,
        .5rem .5rem 0 .25rem rgba(var.$clr--eight-ball, .16);;

      button[type="submit"] {
        margin-top: var.$scale--notch-800;
        padding: var.$scale--notch-400 var.$scale--notch-900;
        border: none;
        border-radius: var.$bdr--radius;
        background: var.$clr--aquitaine;
        font-weight: bold;
        color: var.$clr--alice-blue;
        font-size: var.$scale--notch-500;
        text-transform: uppercase;
        cursor: pointer;

        transition: background-color var.$mtn--duration\base ease-out;
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

    :global {
      @media screen and (min-width: 768px) {
          form.compact {
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;

            div.form-field-group {
                display: flex;
                gap: var.$scale--notch-400;
            }

            .form-field {
              flex-grow: 1;

              + * {
                margin-top: 0;
              }
            }

            button[type="submit"] {
              margin-top: var.$scale--notch-500 !important;
            }
          }
      }
    }
</style>
