<script lang="ts">
	import { page } from '$app/stores';
    import Navigation from '$lib/components/Navigation.svelte';
    import '$lib/css/pico/css/pico.min.css'
    import '$lib/css/main.css'
    import type { PageServerData } from './$types';
    import type { User } from '$lib/types/user';
    import { onDestroy } from 'svelte';
    import { user } from '$lib/stores/fireStore';
    import { logout } from '$lib/firebase/client/helper';

    // export const data: PageServerData;
    
    const handleLogout =  async (e:any)=> {
        console.log("logging out...", e);
        await logout();
        
    }
</script>


<div class="app">
    <Navigation on:logout={handleLogout}></Navigation>
    <slot></slot>
</div>

<style lang="scss">
    
</style>