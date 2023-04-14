<script lang="ts">
	import { navigation } from '$lib/actions';
    import { routes } from "$lib/routes.js";
    import uiStore from "$lib/stores/uiStore";
</script>

<nav class="navigation">
    <ul>
        <li><strong>User Auth Demo</strong></li>
    </ul>
    <ul>
        {#each routes as route}
            {#if route.public === false}
                {#if $uiStore.dashboard && route.pathname == "/dashboard"}
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
        {#if $uiStore.loggedIn === true}
            <li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a role="" use:navigation on:logout ><span>Logout</span></a>
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