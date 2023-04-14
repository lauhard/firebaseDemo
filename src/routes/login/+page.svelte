<script lang="ts">
    import { goto } from "$app/navigation";
    import Login from "$lib/components/Login.svelte";
    import type { PageServerData } from "./$types";
    
    export let data: PageServerData;

    const login = async (e:CustomEvent)=>{
        const { result } = e.detail
        const { success } = result.data;
        if(success) {
            goto('/dashboard')
        }
    }

</script>

<h1>Login</h1>

<Login on:login={login}></Login>