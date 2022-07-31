<nav>
    <ul class="container">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</nav>

<style lang="scss">
    @use '../../styles/variables' as var;

    nav {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
      height: var.$lyt--nav-height;
      background-color: #fff;
      border-bottom: 1px solid var.$clr--alice-blue;
      box-shadow: 0 .125rem .4rem .125rem rgba(var.$clr--eight-ball, .16);

      ul {
        list-style-type: none;
        display: flex;
        height: 100%;

        li {
          display: flex;
          justify-content: center;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-inline: var.$scale--notch-400;
        }
      }
    }
</style>
