<script lang="ts">
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
    </ul>
</nav>

<style lang="scss">
    nav{
        ul, li, a{
            margin: 0;
        }
    }
</style>