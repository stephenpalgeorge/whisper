<script>
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


  :global {
      .form-field {
        display: flex;
        flex-direction: column;

        label {
          font-weight: bold;
          color: var.$clr--deep-larkspur;

          &.required::after {
            content: '*';
            margin-left: math.div(var.$scale--100, 2);
            color: var.$clr--pomegranate;
          }
        }

        label + input,
        label + textarea {
          margin-top: var.$scale--100;
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
          margin-top: var.$scale--100;
        }

        span.error {}
      }

      .form-field + * {
        margin-top: var.$scale--400;
      }
  }
</style>
