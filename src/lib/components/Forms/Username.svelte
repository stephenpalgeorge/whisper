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

    <p class="description">
        Provide a username for this dialogue. This will be how you're known and
        identified to other's in the conversation. <strong>Your name must be at least 3 characters long.</strong>
    </p>
</form>

<style lang="scss">
    @use '../../styles/variables' as var;
    @use '../../styles/mixins' as m;

    form {
        @include m.inline-form($block: 0);
        position: relative;

        p.description {
            position: absolute;
            left: 0;
            bottom: 0;
            transform: translateY(125%);
            font-style: italic;
            line-height: 1.5;
            color: var.$clr--deep-larkspur;
        }
    }
</style>
