<nav>
    <div class="container">
        <a id="site-name" href="/">Whisper</a>
        <ul>
            <li><a href="/find" class="highlighted">Find</a></li>
            <li><a href="/create">Create</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
</nav>

<style lang="scss">
    @use '../../styles/variables' as var;

    nav {
      justify-content: space-between;
      width: 100%;
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

        &.highlighted {
          font-weight: 900;
          background-color: rgba(var.$clr--eight-ball, .12);
          color: var.$clr--eight-ball;
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

      }
    }
</style>
