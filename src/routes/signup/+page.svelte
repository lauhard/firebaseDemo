<script lang="ts">
    import { page } from '$app/stores';
	import Signup from '$lib/components/Signup.svelte';
    import { onMount } from 'svelte';
    import type { PageData, PageLoad, PageServerData } from './$types';
    
    let data: PageServerData = null;

    console.log("server data: ", data)
</script>

<h1>Signup</h1>

<Signup></Signup>

<style lang="scss">

</style>