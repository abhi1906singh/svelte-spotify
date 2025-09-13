<script lang="ts">
	let searchQuery = $state('');
	let searchResults: Array = [];
	async function handleSubmit(event: any) {
		event.preventDefault();
		let data = searchQuery.toLowerCase();

		const response = await fetch(`/api/auth/search?q=${encodeURIComponent(data)}`);
		if (response.ok) {
			searchResults = await response.json();
		}
	}
</script>

<div class="p-2">
	<h1>Welcome to my spotify application</h1>
	<form onsubmit={handleSubmit}>
		<input bind:value={searchQuery} />
		<button type="submit">Search</button>
	</form>
	<select>
		<option>Hello</option>
	</select>
	<button>Button</button>
</div>

<style lang="scss">
	@use '../styles/functions';
	@use '@unsass/breakpoint';
	h1 {
		color: red;
		font-size: functions.toRem(36);
		@include breakpoint.up('md') {
			color: darkcyan;
		}
		@include breakpoint.up('lg') {
			color: green;
		}
	}
</style>
