<script lang="ts">
    import 'modern-normalize/modern-normalize.css';
    import '../styles/main.scss';
	import type { LayoutData } from './$types';
	import LogoutButton from '$lib/components/LogoutButton.svelte';
    	

    export let data:LayoutData;
    $: user=data.user;
</script>
<slot/>
{#if user}
<div>Hello {data.user?.display_name}</div>
<LogoutButton/>
{/if}