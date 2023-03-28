<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';



    const handleLogin:SubmitFunction = async (event)=>{
        
    }
    
</script>

<form class="form" method="POST" action="?/login" on:submit|preventDefault use:enhance={handleLogin} >
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
</form>


<style lang="scss">

</style>