<script lang="ts">
import Navigation from '$lib/components/Navigation.svelte';
import '$lib/css/pico/css/pico.min.css'
import '$lib/css/main.css'
</script>

<div class="app">
    <Navigation></Navigation>
    <slot></slot>
</div>

<style lang="scss">
    
</style>