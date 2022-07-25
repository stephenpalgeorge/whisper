<script>
    /**
     *
     * The `Next` icon is a simple outline vector graphic of
     * an arrow pointing to the right.
     *
     * */

    export let color = "#000";
</script>

<svg width="314px" height="289px" viewBox="0 0 314 289" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Next Icon</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(0.309550, 0.150460)" fill="{color}" fill-rule="nonzero">
            <path d="M176.719,1.57021457 C167.7581,-7.39068543 135.8361,24.5312146 144.797,33.4922146 L233.84,116.531215 L9.24,116.531215 C-3.08,116.531215 -3.08,173.327215 9.24,173.327215 L234.4,173.327215 L144.802,256.370215 C135.8411,265.331115 171.681,292.772715 176.162,288.292215 L303.842,160.612215 C308.29697,156.157245 313.431274,150.099038 313.45935,144.391461 C313.482234,138.618595 308.34793,133.196195 303.842,128.690215 L176.719,1.57021457 Z"></path>
        </g>
    </g>
</svg>

<style lang="scss">
  @use '../../styles/variables' as var;

  svg, g, path {
    transition: fill var.$mtn--duration-base ease-out;
  }
</style>
