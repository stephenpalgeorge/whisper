<script>
    // state variable to track whether the menu pane is expanded or not
    // this only makes a difference on mobile layout, it's value is irrelevant
    // for larger breakpoints.
    let expanded = false;
    let menuItems = [
        { path: '/find', label: 'Find' },
        { path: '/create', label: 'Create' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];
</script>

<nav>
    <div class="container">
        <a id="site-name" href="/">Whisper</a>
        <input class="menu-toggle" type="checkbox" name="menu-toggle-icon" id="menu-toggle-icon" bind:checked={expanded} />
        <label class="menu-toggle" for="menu-toggle-icon">
            <!-- icon goes here -->
            <div></div>
            <div></div>
        </label>
        <ul>
            {#each menuItems as item}
                <li on:click={() => expanded = false}>
                    <a href="{item.path}">{item.label}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style lang="scss">
    @use '../../styles/mixins' as m;
    @use '../../styles/variables' as var;

    nav {
      justify-content: space-between;
      width: 100vw;
      position: fixed;
      top: 0;
      z-index: 2;
      height: var.$lyt--nav-height;
      background-color: #fff;
      border-bottom: 1px solid var.$clr--alice-blue;
      box-shadow: 0 .125rem .4rem .125rem rgba(var.$clr--eight-ball, .16);

      div.container {
        display: flex;
        justify-content: space-between;
        height: 100%;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: var.$scale--notch-400;
        text-decoration: none;

        &#site-name {
          text-transform: uppercase;
          font-weight: 900;
        }

        &:hover {
          @include m.underline;
        }
      }

      ul {
        list-style-type: none;
        display: flex;
        height: 100%;

        li {
          display: flex;
          justify-content: center;
        }

        @media screen and (max-width: 767px) {
          position: absolute;
          top: var.$lyt--nav-height;
          left: -100%;
          z-index: 1;
          background-color: #fff;
          width: 100%;
          flex-direction: column;
          height: auto;
          box-shadow: 0 .5rem .4rem 0 rgba(var.$clr--eight-ball, .16);
          transition:
            left var.$mtn--duration\fast var.$mtn--timing-function,
            box-shadow var.$mtn--duration\fast var.$mtn--timing-function (var.$mtn--duration\fast * .5);

          a {
            width: 100%;
            padding-block: var.$scale--notch-400;
            font-size: var.$scale--notch-500;
          }
        }
      }

      .menu-toggle {
        display: none;
        @media screen and (max-width: 767px) {
          display: block;
          margin-right: var.$scale--notch-400;
        }
      }

      label.menu-toggle {
        padding-inline: var.$scale--notch-400;
        position: relative;

        > div {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: var.$scale--notch-100;
          background-color: var.$clr--eight-ball;
          transition: top var.$mtn--duration\base var.$mtn--timing-function;

          &:first-child {
            top: 40%;
          }

          &:last-child {
            top: 60%;
          }
        }
      }

      input[type="checkbox"] {
        display: none;

        &:checked {
          + label {
            font-weight: bold;

            > div {
              top: 50%;
            }
          }

          ~ ul {
            left: 0;
            box-shadow:
                0 .125rem .4rem .125rem rgba(var.$clr--eight-ball, .16),
                0 1000px 0 1000px rgba(var.$clr--eight-ball, .08);
          }
        }
      }
    }
</style>
