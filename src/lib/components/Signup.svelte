<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
    import { createEventDispatcher } from 'svelte';
    import { formAction } from '$lib/forms/enhance';
    
    export let action = "";

    const dispatch = createEventDispatcher();
   
</script>
    <form class="form" method="POST" use:enhance={(e)=>formAction(e, dispatch, "signup")} action="{action}">
        <div class="grid">
            <label for="firstname">
                First name
                <input type="text" id="firstname" name="firstname" placeholder="First name" required>
            </label>

            <label for="lastname">
                Last name
                <input type="text" id="lastname" name="lastname" placeholder="Last name" required>
            </label>
            <label for="password">
                Password
                <input type="text" id="password" name="password" placeholder="Password" required>
            </label>
        </div>
        <label for="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Email address" required>
        <button type="submit">Submit</button>
        {#if $page.form?.errorInfo }
            { $page.form?.errorInfo }
        {/if}
</form>

<style lang="scss">
 
</style>