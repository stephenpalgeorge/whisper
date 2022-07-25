<script>
    /**
     *
     * `<LinkList />` is a presentational component that simply displays a
     * collection of links - these are styled as "cards" in the UI, but the
     * entire card is a clickable area.
     *
     * */

    // we expect to receive an array of object, wherein each object has properties
    // `url`, `title` and `description`.
    export let links;
</script>

<ul>
    {#each links as link}
        <li>
            <a href="{link.url}">
                <h3>{link.title}</h3>
                <p>{link.description}</p>
            </a>
        </li>
    {/each}
</ul>

<style lang="scss">
  @use '../styles/variables' as var;

  ul {
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    margin-inline: var.$scale--notch-400 * -1;

    li {
      flex-grow: 1;
      margin-inline: var.$scale--notch-400;
      padding: var.$scale--notch-400 var.$scale--notch-300;
      border: 1px solid var.$clr--approaching-dusk;
      box-shadow: 0 .25rem .5rem .125rem rgba(var.$clr--eight-ball, .16);

      a {
        text-decoration: none;
        cursor: pointer;
      }

      h3 {
        text-decoration: underline;
        text-transform: uppercase;
        color: var.$clr--aquitaine;
      }

      p {
        margin-top: var.$scale--notch-200;
      }
    }
  }
</style>
