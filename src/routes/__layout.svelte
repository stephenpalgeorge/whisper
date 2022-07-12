<script>
    import MainNav from "$lib/components/Globals/MainNav.svelte";
</script>

<main>
    <header>
<!--        <MainNav />-->
    </header>
    <slot></slot>
</main>

<style lang="scss">
    @use '../lib/styles/variables' as var;

    :global{
        // resets
        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html:focus-within {
          scroll-behavior: smooth;
        }

        body {
          min-height: 100vh;
          text-rendering: optimizeSpeed;
        }

        image, picture {
          max-width: 100%;
          display: block;
        }

        input, button, textarea, select {
          font: inherit;
        }

        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto;
          }

          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        * {
          font-family: var.$font--sans-serif;
        }

        ::selection {
          background-color: rgba(var.$clr--pomegranate, .2);
        }

        section + section {
          margin-top: var.$scale--900;
        }

        h1, h2, h3, h4, h5, h6,
        p, label, button:not(:disabled) {
          color: var.$clr--eight-ball;
        }

        h1 {
          font-size: var.$scale--900;
          text-transform: uppercase;
          + * {
            margin-top: var.$scale--900;
          }
        }

        h2 {
          font-size: var.$scale--700;
          + * {
            margin-top: var.$scale--500;
          }
        }

        p {
          font-size: var.$scale--400;
          line-height: 1.8;
          & + & {
            margin-top: var.$scale--400;
          }

          &.lead {
            font-size: var.$scale--500;
            font-weight: bold;
            line-height: 1.6;
          }
        }

        .pre-title {
          font-size: var.$scale--300;
          font-style: italic;
          text-transform: uppercase;
          color: var.$clr--deep-larkspur;
        }

        a {
          color: var.$clr--deep-larkspur;
          &:focus {
            outline: none;
            background-color: rgba(var.$clr--deep-larkspur, .2);
            color: var.$clr--eight-ball;
          }
        }

        .page-container {
          width: min(100%, 45rem);
          margin-inline: auto;
          padding-block: var.$scale--900;
        }

        .hidden {
          position: absolute !important;
          overflow: hidden;
          clip: rect(1px, 1px, 1px, 1px);
          width: 1px;
          height: 1px;
          word-wrap: normal;
        }

        button.icon-button svg {
          width: 50%;
          height: auto;
        }

        // utilities
        @each $name, $hex in var.$colors {
          .clr\:#{$name} {
            color: $hex;
          }

          .bg\:#{$name} {
            background-color: $hex;
          }
        }
    }
</style>