<script>
    import Next from "$lib/components/Icons/Next.svelte";

    export let password;
    export let submit;
    export let error = {};
</script>

<form on:submit={submit}>
    <label for="dialogue-password" class="hidden">Enter the password.</label>
    <input type="password" name="dialogue-password" id="dialogue-password" bind:value={password} placeholder="enter the password..." />
    {#if error.origin && error.origin === 'password'}
        <span class="error">{error.message}</span>
    {/if}

    {#if error.origin && error.origin === 'id'}
        <span class="error">{error.message}</span>
    {/if}

    <button class="icon-button" type="submit" disabled={password.length <= 0}>
        <Next color={password.length <= 0 ? "#BECBD6" : "#FFF"} />
    </button>
</form>

<style lang="scss">
    @use '../../styles/mixins' as m;

    form {
      @include m.inline-form;
      position: relative;

      span.error { @include m.form-error; }
    }
</style>