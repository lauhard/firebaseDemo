<script lang="ts">
	import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    import { formAction } from '$lib/forms/enhance';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<form class="form" method="POST" use:enhance={(e)=>formAction(e, dispatch, "login")} action="?/login" >
    <div class="grid">
        <label for="email">
            Email address
            <input type="email" id="email" name="email" placeholder="Email address" required>
        </label>
        <label for="password">
            Password
            <input type="text" id="password" name="password" placeholder="Password" required>
        </label>
    </div>
    <button type="submit">Login</button>
    {#if $page.form?.error }
        <p> { $page.form?.error }</p>  
    {/if}
    <p>
        <a href="/signup">Create Account</a>
    </p>
</form>

<style lang="scss">

</style>