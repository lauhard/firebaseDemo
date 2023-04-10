<script lang="ts">
    import { page } from '$app/stores';
	import Signup from '$lib/components/Signup.svelte';
    import { authUser } from '$lib/stores/fireStore';
    import type { PageServerData } from './$types';


    export let data: PageServerData;
    $authUser

    let formError:string | null = "";
    
    $:user = data.user;
    $:console.log("user", user);
    $:console.log("data", data);



    
</script>
<h1>Signup</h1>

<p>user from server: {user?.uid} </p>
<p>user from store: { $authUser?.uid}</p>

<Signup></Signup>

<style lang="scss">

</style>