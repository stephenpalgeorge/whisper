<script>
    import MainNav from "$lib/components/Globals/MainNav.svelte";
</script>

<main>
    <header>
        <MainNav />
    </header>
    <slot></slot>
</main>

<style lang="scss">
    @use '../lib/styles/variables' as var;

    :global{
        h1, h2, h3, h4, h5, h6,
        p, label, button {
          color: var.$clr--eight-ball;
        }

        a {
          color: var.$clr--deep-larkspur;
        }
    }
</style>