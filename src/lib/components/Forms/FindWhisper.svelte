<script>
    /**
     *
     * The `<FindWhisper />` form is an example of an `inline` form. This means that
     * the form field (one at a time) and the 'submit' button appear inline with each other,
     * in one horizontal row layout.
     *
     * 'FindWhisper' is more complicated that a standard inline form as it also introduces
     * the idea of 'steps', whereby the user progresses from one form-field to the next,
     * eventually submitting the form after all inputs have been filled.
     *
     * */

    // ICON IMPORTS ----------
    import Find from "$lib/components/Icons/Find.svelte";
    import Next from "$lib/components/Icons/Next.svelte";

    // PROPS -----------------
    export let id;
    export let password;
    export let submit;
    export let step = 1;
    export let error = {};
</script>

<!-- hidden <h2> provided for a11y purposes -->
<h2 class="hidden">Find a Whisper</h2>
<form on:submit={submit}>
    {#if step === 2}
        <!--
            text only displays on the second step. The link takes us back to step 1 by updating
            the `step` variable, and therefore doesn't really behave like a link, hence the `preventDefault();`.
            @todo - review this; SvelteKit is complaining about the `#` href as an a11y concern.
        -->
        <p>You're looking for a Whisper with an ID: <mark>{id}</mark>. <a href="#" on:click={e => {
            e.preventDefault();
            step = 1;
        }}>Edit this and search again.</a></p>
    {/if}

    {#if step === 1}
        <!-- hidden labels are for correct markup, and a11y. Most users will be prompted by the placeholder text. -->
        <label for="find-whisper-id" class="hidden">Search for a Whisper by entering an ID.</label>
        <input type="text" name="find-whisper-id" id="find-whisper-id" placeholder="Enter a Whisper ID..." bind:value={id} />
        <!--
            the `error` objects we receive from the API include an `origin` property, meaning we can easily
            show the relevant error message next to its corresponding input.
        -->
        {#if error.origin && error.origin === 'id'}
            <span class="error">{error.message}</span>
        {/if}

        <!-- button takes us on to the next step (step 2) and is disabled until user has entered *something* into the `id` input -->
        <button class="icon-button" on:click={e => {
            e.preventDefault();
            step = 2;
        }} disabled={id.length <= 0}>
            <!-- icon color reacts to the disabled state of the button, since this affects the button's background-color -->
            <Next color={id.length <= 0 ? "#BECBD6" : "#FFF"} />
        </button>
    {:else}
        <label for="find-whisper-password" class="hidden">Enter the password for this whisper.</label>
        <input type="password" name="find-whisper-password" id="find-whisper-password" placeholder={`Enter the password for Whisper ${id}`} bind:value={password} />
        {#if error.origin && error.origin === 'password'}
            <span class="error">{error.message}</span>
        {/if}

        <!-- this time button actually submits the form, the submit handler is set on the `<form>` tag itself on line 16 -->
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
          padding-inline: math.div(var.$scale--notch-100, 2);
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
