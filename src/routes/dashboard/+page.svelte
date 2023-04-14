<script lang="ts">
    import type { PageServerData } from './$types';
    export let data: PageServerData;
    const user = data.client;
    const claims = data.claims;
</script>

<h1>Dashboard</h1>

<style>

</style>