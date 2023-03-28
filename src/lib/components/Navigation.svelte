<script lang="ts">
    import {routes} from "$lib/routes.js";
</script>

<nav class="navigation">
    <ul>
        <li><strong>User Auth Demo</strong></li>
    </ul>
    <ul>
        {#each routes as route}
            {#if route.public}
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