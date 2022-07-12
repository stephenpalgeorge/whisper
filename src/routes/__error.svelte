<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                error,
                status,
            }
        }
    }
</script>

<script>
    export let error;
    export let status;

    $: console.log(error);
</script>

<div class="page-container">
    <section>
        <h1>Oops..!</h1>
        <h2>{status} Error.</h2>
        {#if status === 404}
            <p>
                <strong>Sorry, we couldn't find that page.</strong><br />
                It might have moved, or there could be a mistake in the URL?
            </p>
        {:else if status === 403}
            <p>
                <strong>Sorry, we can't show you that.</strong><br />
                You might not be properly authenticated for this whisper, or it could have expired
                and no longer be available.
            </p>
        {:else}
            <p>
                <strong>Sorry, something has gone wrong!</strong><br />
                There's a problem our end, we're sorry. Please try again in a bit, when hopefully
                we'll have sorted things out.
            </p>
        {/if}
    </section>

    <section>
        <h2>Useful links</h2>
        <ul>
            <li>
                <a href="/">
                    <h3>Go home.</h3>
                    <p>Go back to the homepage and create or search for a whisper.</p>
                </a>
            </li>
            <li>
                <a href="/contact">
                    <h3>Get in touch.</h3>
                    <p>Facing an issue you can't resolve? Let us know and we'll do our best to fix it.</p>
                </a>
            </li>
            <li>
                <a href="/about">
                    <h3>More about Whisper.</h3>
                    <p>Want to know more about us? This page will fill you in.</p>
                </a>
            </li>
        </ul>
    </section>
</div>

<style lang="scss">
    @use '../lib/styles/variables' as var;
    ul {
      list-style-type: none;
      display: flex;
      flex-flow: row nowrap;
      margin-inline: var.$scale--400 * -1;

      li {
        flex-grow: 1;
        margin-inline: var.$scale--400;
        padding: var.$scale--400 var.$scale--300;
        border: 1px solid var.$clr--approaching-dusk;
        box-shadow: 0 .25rem .5rem .125rem rgba(var.$clr--eight-ball, .16);

        a {
          text-decoration: none;
          cursor: pointer;
        }

        h3 {
          text-decoration: underline;
          color: var.$clr--aquitaine;
        }

        p {
          margin-top: var.$scale--200;
        }
      }
    }
</style>
