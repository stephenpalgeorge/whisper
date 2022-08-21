<script>
    /**
     * each 'item' in this array should be of shape:
     * {
     *     label: String,
     *     content: String (markdown..?),
     *     default: Bool,
     * }
     *
     */
    export let items = [];
    export let id;

    let active = items.filter(it => it.default)[0];

    function slugify(str) {
        return str
            .toLowerCase()
            .trim()
            .replace(' ', '-');
    }
</script>

<section class="tabs" {id}>
    {#if items && items.length > 0}
        <div class="tab-controls">
            {#each items as item}
                {@const slug = slugify(item.label)}
                <!--  render a label for each item, it will correspond to a radio input in the `tab-contents`  -->
                <!--  @todo there're a11y concerns with this as the labels can't be navigable with the keyboard... need to think about this  -->
                <label
                    on:click={() => active = item}
                    for="{slug}"
                    class:active={item.label === active.label}
                >{item.label}</label>
            {/each}
        </div>
        <div class="tab-contents">
            {#each items as item}
                {@const slug = slugify(item.label)}
                <!--  render a radio input for each item, we can used it's `checked` state to determine whether or
                not the subsequent content should be shown  -->
                <input type="radio" name="tab-contents--{id}" id="{slug}" checked={item.default} />
                <div class="tab-item--content">
                    {#if item.headline}<p class="large">{item.headline}</p>{/if}
                    <p>{@html item.content}</p>
                    {#if item.link}<a href="{item.link.url}">{item.link.label}</a>{/if}
                </div>
            {/each}
        </div>
    {/if}
</section>

<style lang="scss">
    @use '../../styles/variables' as var;
    @use '../../styles/mixins' as m;
    .tabs {
      margin-top: var.$scale--notch-700;
      padding: var.$scale--notch-600 var.$scale--notch-500;
      background-color: var.$clr--armor\fade;
      border: .125rem solid var.$clr--melody;

      .tab-controls {
        padding-block-end: var.$scale--notch-900 * .5;
        margin-block-end: var.$scale--notch-900 * .5;
        border-bottom: .125rem solid rgba(var.$clr--melody, .3);

        label {
          margin-inline: var.$scale--notch-400;
          font-size: var.$scale--notch-500;
          text-transform: uppercase;

          @media screen and (max-width: 767px) {
            font-size: var.$scale--notch-400;
          }

          &:not(.active) {
            cursor: pointer;
          }

          &:hover {
            @include m.underline;
          }

          &:first-of-type {
            margin-inline-start: 0;
          }

          &:last-of-type {
            margin-inline-end: 0;
          }

          &.active {
            font-weight: bold;
            @include m.underline;

            @media screen and (max-width: 767px) {
              color: var.$clr--pomegranate;
              transition: color var.$mtn--duration\base ease-out;
            }
          }
        }
      }

      .tab-item--content {
        display: none;

        a {
          display: block;
          padding: var.$scale--notch-100 var.$scale--notch-300;
          margin-top: var.$scale--notch-600;
          width: max-content;
          font-size: var.$scale--notch-400;
          font-weight: bold;
          text-decoration: none;
          color: #fff;
          background-color: var.$clr--apple;

          &:focus {
            outline: .25rem solid var.$clr--apple\fade;
          }
        }
      }

      input[type="radio"] {
        display: none;

        &:checked + .tab-item--content {
          display: block;
        }
      }
    }
</style>
