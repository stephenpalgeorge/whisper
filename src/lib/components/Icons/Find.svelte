<script>
    /**
     *
     * The `Find` icon is a simple outline vector graphic of
     * a magnifying glass.
     *
     * */

    export let color = "#000";
</script>

<svg width="241px" height="241px" viewBox="0 0 241 241" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Find Icon</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(0.269850, 0.000000)" fill="{color}" fill-rule="nonzero">
            <path d="M238.1987,198.6031 C249.1327,209.5371 209.5347,249.1351 198.6007,238.2011 L155.4097,195.0101 C148.933545,186.984129 139.628,194.0179 134.378,195.8734 C123.874,199.5843 112.573,201.6 100.8,201.6 C45.128,201.6 0,156.471 0,100.8 C0,45.128 45.129,0 100.8,0 C156.468,0 201.6,45.129 201.6,100.8 C201.6,112.679 199.5453,124.081 195.7719,134.667 C193.936,139.8115 187.030112,149.26387 195.0102,155.4089 L238.1987,198.6031 Z M100.7987,151.2011 C128.6307,151.2011 151.1967,128.6351 151.1967,100.8031 C151.1967,72.9671 128.6307,50.4011 100.7987,50.4011 C72.9627,50.4011 50.3967,72.9671 50.3967,100.8031 C50.3967,128.6351 72.9627,151.2011 100.7987,151.2011 Z"></path>
        </g>
    </g>
</svg>

<style lang="scss">
  @use '../../styles/variables' as var;

  svg, g, path {
    transition: fill var.$mtn--duration\base ease-out;
  }
</style>
