<script lang="ts">
	import { page } from '$app/stores';
    import Navigation from '$lib/components/Navigation.svelte';
    import '$lib/css/pico/css/pico.min.css'
    import '$lib/css/main.css'
    import type { PageServerData } from './$types';
</script>


<div class="app">
    <Navigation ></Navigation>
    <slot></slot>
</div>

<style lang="scss">
    
</style>