<script>
    import Next from "$lib/components/Icons/Next.svelte";

    export let submit;
    let value = "";
    $: disabled = value.length < 3;
</script>

<form on:submit={submit}>
    <label for="username" class="hidden">Enter a name for yourself.</label>
    <input type="text" name="username" id="username" bind:value={value} placeholder="Identify yourself!" />
    <button class="icon-button" type="submit" {disabled}>
        <Next color={disabled ? "#BECBD6" : "#FFF"} />
    </button>
</form>

<style lang="scss">
    @use '../../styles/mixins' as m;

    form {
        @include m.inline-form($block: 0);
    }
</style>
