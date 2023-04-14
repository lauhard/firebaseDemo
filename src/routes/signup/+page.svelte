<script lang="ts">
    import { goto } from '$app/navigation';
	import Signup from '$lib/components/Signup.svelte';
    import type { PageServerData } from './$types';

    export let data: PageServerData;

    const signup = (e:CustomEvent)=>{
        const { result } = e.detail
        console.log("signup result: ",result)
        const { success } = result.data;
            if( success) 
                goto('/login')
    }
    
</script>

<h1>Signup</h1>

<Signup on:signup={signup} action="?/signup"></Signup>

<style lang="scss">

</style>