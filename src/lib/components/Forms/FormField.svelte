<script>
    /**
     *
     * `<FormField />` is a wrapper component for any input in a form. It provides
     * common styling, and a common API for all form fields in the Whisper design system.
     *
     * */

    export let description = "";
    export let error = "";
</script>

<div class="form-field">
    <slot></slot>
    {#if error && error.length > 0}
        <span class="error">{error}</span>
    {/if}
    {#if description && description.length > 0}
        <span class="description">{description}</span>
    {/if}
</div>

<style lang="scss">
  @use 'sass:math';
  @use '../../styles/variables' as var;
  @use '../../styles/mixins' as m;


  // these styles are all placed within a `global` since the things
  // they are styling are not in this file, but rather will be the contents
  // of the component's `<slot></slot>`.
  :global {
      .form-field {
        display: flex;
        flex-direction: column;

        label {
          font-weight: bold;
          color: var.$clr--deep-larkspur;

          // labels are marked as `required` with a class. The labels are
          // placed *before* the inputs, so we can't do the neater looking
          // input[required] + label etc.
          &.required::after {
            content: '*';
            margin-left: math.div(var.$scale--notch-100, 2);
            color: var.$clr--pomegranate;
          }
        }

        label + input,
        label + textarea {
          margin-top: var.$scale--notch-100;
        }

        input, textarea {
          @include m.input-base;
          border: .25rem solid var.$clr--deep-larkspur;
          border-radius: .125rem;

          &:focus {
            outline: .25rem solid rgba(var.$clr--deep-larkspur, .25);
            outline-offset: .125rem;
          }
        }

        span.description {
          font-size: 1em;
          margin-top: var.$scale--notch-100;
        }

        span.error {
          // @todo - style the errors
        }
      }

      .form-field + * {
        margin-top: var.$scale--notch-400;
      }
  }
</style>
