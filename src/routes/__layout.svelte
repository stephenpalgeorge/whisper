<script>
    import MainNav from "$lib/components/Globals/MainNav.svelte";
</script>

<main>
    <header>
    <!-- @todo re-instate main nav (needs styling etc) -->
<!--        <MainNav />-->
    </header>
    <slot></slot>
    <!-- @todo add a footer -->
</main>

<style lang="scss">
    @use 'sass:math';
    @use '../lib/styles/variables' as var;
    @use '../lib/styles/mixins' as m;

    :global{
        @include m.reset;
        @include m.globals;

        // utilities
        @each $name, $hex in var.$clr--map {
          .clr\:#{$name} { color: $hex; }
          .bg\:#{$name} { background-color: $hex; }
        }

        .block { display: block; }
    }
</style>