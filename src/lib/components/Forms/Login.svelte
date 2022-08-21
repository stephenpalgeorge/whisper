<script>
import Form from "$lib/components/Forms/Form.svelte";
import FormField from "$lib/components/Forms/FormField.svelte";

export let username = "";
export let password = "";
export let submit;
export let error = {};
$: disabled = username.length === 0 || password.length === 0;

let inputType = "password";
</script>

<Form {submit} buttonText="Let's go!" {disabled} compact={true}>
    <div class="form-field-group">
        <FormField>
            <label for="login-username">Username</label>
            <input required type="text" name="login-username" id="login-username" bind:value={username} />
            {#if error.origin && error.origin === 'username'}
                <span class="error-block">{error.message}</span>
            {/if}
        </FormField>

        <FormField>
            <label for="login-password">Password</label>
            <div class="input-container">
                {#if inputType === "password"}
                    <input type="password" name="login-password" id="login-password" bind:value={password} />
                    <button tabindex="-1" title="show your password" on:click={() => inputType = "text"} id="password-vis"></button>
                {:else if inputType === "text"}
                    <input type="text" name="login-password" id="login-password" bind:value={password} />
                    <button tabindex="-1" title="hide your password" on:click={() => inputType = "password"} id="password-vis"></button>
                {/if}
            </div>
            {#if error.origin && error.origin === 'password'}
                <span class="error-block">{error.message}</span>
            {/if}
        </FormField>
    </div>
</Form>

<style lang="scss">
    @use '../../styles/variables' as var;

    .input-container {
      $button-pos\right: .75rem;
      $button-size: 2rem;
      $input-padding\right: $button-pos\right + $button-size + var.$scale--notch-400;

      position: relative;

      input {
        width: 100%;
        padding-right: $input-padding\right;
      }

      button#password-vis {
        position: absolute;
        top: 50%;
        right: .75rem;
        transform: translateY(-50%);
        width: 2rem;
        height: 2rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 55%;
        border: .125rem solid var.$clr--deep-larkspur;
        border-radius: .125rem;
        background-color: var.$clr--melody\fade;
        cursor: pointer;

        &:focus {
          outline: .25rem solid var.$clr--melody\fade;
          outline-offset: .125rem;
        }
      }

      input[type="password"] + button#password-vis {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23687387' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='3'%3E%3C/circle%3E%3C/svg%3E");
      }

      input[type="text"] + button#password-vis {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23687387' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'/%3E%3Cline x1='1' y1='1' x2='23' y2='23'/%3E%3C/svg%3E");
      }
    }

    span.error-block {
      color: var.$clr--pomegranate;
      margin-top: var.$scale--notch-100;
    }
</style>
