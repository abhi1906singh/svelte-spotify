<script lang="ts">
    import 'modern-normalize/modern-normalize.css';
    import '../styles/main.scss';
	import type { LayoutData } from './$types';
	import LogoutButton from '$lib/components/LogoutButton.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
    import "@fontsource/metropolis";      // base
    import "@fontsource/metropolis/300.css";
    import "@fontsource/metropolis/500.css";
    import "@fontsource/metropolis/600.css";
    import "@fontsource/metropolis/700.css"
    	

    export let data:LayoutData;
    $: user=data.user;
</script>
<Navbar/>
<slot/>
{#if user}
<div class="p-2">
<div>Hello {data.user?.display_name}</div>
<LogoutButton/>
</div>
{/if}