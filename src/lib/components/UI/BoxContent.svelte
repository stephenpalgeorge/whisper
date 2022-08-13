<script>
    export let title = "";
    export let background = "pomegranate";
</script>

<section class="box-content bg:{background}">
    {#if title && title.length > 0}
        <h2>{title}</h2>
    {/if}

    <slot></slot>
</section>

<style lang="scss">
    @use '../../styles/variables/index' as var;

    .box-content {
      padding: var.$scale--notch-600 var.$scale--notch-500;

      h2 {
        color: var.$clr--alice-blue;
      }
    }

    @each $clr-name, $clr-value in var.$clr--map {
      .box-content.bg\:#{$clr-name} {
        box-shadow: 0 0 0 .1875rem #fff, 0 0 0 .5rem rgba($clr-value, .24);
        h2 {
          text-shadow: .1875rem .1875rem $clr-value, .375rem .375rem 0 rgba(var.$clr--alice-blue, .32);
        }

        :global {
          * {
            color: var.$clr--alice-blue;
          }
        }
      }
    }

    :global {
      .box-content ul {
        list-style-type: none;
      }
    }
</style>
