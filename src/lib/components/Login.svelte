<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let formError="";
</script>

<form class="form" method="POST" on:submit|preventDefault="{(e)=>dispatch('login',{"event":e})}" >
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
    {#if formError}
        {formError}
    {/if}
    
</form>


<style lang="scss">

</style>