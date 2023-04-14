<script lang="ts">
	import  uiStore  from '$lib/stores/uiStore';
    import Navigation from '$lib/components/Navigation.svelte';
    import '$lib/css/pico/css/pico.min.css'
    import '$lib/css/main.css'
    import type { PageServerData } from './$types';
    import { logout } from '$lib/firebase/client/helper';
    import { callAction } from '$lib/utils/fetch';

    export let data: PageServerData;

    const handleLogout =  async (e:any)=> {
        console.log("logging out...", e);
       
        const response = await callAction(
            '../../api/firebase',
            null,
            'DELETE',
        );
        if(response.ok && response.status === 200) {
            console.log("logout response", response.body);
            await logout();
            uiStore.set({admin:false, dashboard:false, loggedIn:false})
        }
    }
</script>

<div class="app">
    <Navigation on:logout={handleLogout}></Navigation>
    <slot></slot>
</div>

<style lang="scss">
    
</style>