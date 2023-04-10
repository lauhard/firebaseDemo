<script lang="ts">
	import { fire } from '$lib/actions';
    import { routes } from "$lib/routes.js";
    import uiStore from "$lib/stores/uiStore";
    import {user} from "$lib/stores/fireStore";
    export let uid="";      
</script>

uid {uid}

<nav class="navigation">
    <ul>
        <li><strong>User Auth Demo</strong></li>
    </ul>
    <ul>
        {#each routes as route}
            {#if route.public === false}
                {#if $uiStore.dashboard}
                    <li>
                        <a href="{route.pathname}">{route.name}</a>
                    </li>
                {/if}
            {:else}
                <li>
                    <a href="{route.pathname}">{route.name}</a>
                </li>
            {/if}
        {/each}
        {#if $user?.uid}
            <li>
                <a role="" use:fire on:logout ><span>Logout</span></a>
            </li>
        {:else}
            <li>
                <a role="" href="/login"><span>Login</span></a>
            </li>
        {/if}
        <li>
            <a role="button" href="/signup"><span>Create accout</span></a>
        </li>
    </ul>
</nav>

<style lang="scss">
    nav{
        ul, li, a{
            margin: 0;
            a[role="button"] {
                width:auto;
                span{
                    margin: 0  10px;
                }
            }
            
        }
        // ul>li:last-child > a{
        //     border: 2px solid var(--primary);

        // }
    }
</style>