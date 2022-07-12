<script>
    import Find from "$lib/components/Icons/Find.svelte";
    import Next from "$lib/components/Icons/Next.svelte";

    export let id;
    export let password;
    export let submit;
    export let step = 1;
    export let error = {};
</script>

<form on:submit={submit}>
    {#if step === 2}
        <p>You're looking for a Whisper with an ID: <mark>{id}</mark>. <a href="#" on:click={e => {
            e.preventDefault();
            step = 1;
        }}>Edit this and search again.</a></p>
    {/if}

    {#if step === 1}
        <label for="find-whisper-id" class="hidden">Search for a Whisper by entering an ID.</label>
        <input type="text" name="find-whisper-id" id="find-whisper-id" placeholder="Enter a Whisper ID..." bind:value={id} />
        {#if error.origin && error.origin === 'id'}
            <span class="error">{error.message}</span>
        {/if}
        <button class="icon-button" on:click={e => {
            e.preventDefault();
            step = 2;
        }} disabled={id.length <= 0}>
            <Next color={id.length <= 0 ? "#BECBD6" : "#FFF"} />
        </button>
    {:else}
        <label for="find-whisper-password" class="hidden">Enter the password for this whisper.</label>
        <input type="password" name="find-whisper-password" id="find-whisper-password" placeholder={`Enter the password for whisper ${id}`} bind:value={password} />
        {#if error.origin && error.origin === 'password'}
            <span class="error">{error.message}</span>
        {/if}
        <button class="icon-button" type="submit" disabled={password.length <= 0}>
            <Find color={password.length <= 0 ? "#BECBD6" : "#FFF"} />
        </button>
    {/if}
</form>

<style lang="scss">
    @use 'sass:math';
    @use '../../styles/variables' as var;
    @use '../../styles/mixins' as m;

    form {
      @include m.inline-form;
      position: relative;

      p {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-140%);
        font-style: italic;

        mark {
          padding-inline: math.div(var.$scale--100, 2);
          background-color: rgba(var.$clr--aquitaine, .4);
          font-weight: bold;
        }
      }

      span.error {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(140%);
        color: var.$clr--pomegranate;
      }
    }
</style>