<script lang="ts">
	let searchQuery = $state('');
	let searchResults: Array = $state([]);
	async function handleSubmit(event: any) {
		event.preventDefault();
		let data = searchQuery.toLowerCase();

		const response = await fetch(`/api/auth/search?q=${encodeURIComponent(data)}`);
		if (response.ok) {
			searchResults = await response.json();
			console.log(searchResults, 'responseresponse');
		}
	}
</script>

<div class="p-2">
	<h1>Welcome to my spotify application</h1>
	<form onsubmit={handleSubmit}>
		<input bind:value={searchQuery} />
		<button type="submit">Search</button>
	</form>
	<!-- <select>
		<option>Hello</option>
	</select>
	<button>Button</button> -->
	{#if searchResults}
		<div class="album-list p-2">
			<h2>Popular</h2>
			{#each searchResults?.albums?.items as data, i}
				<div class="flex hover-card">
					<div class="flex gap-1">
						<div>{i + 1}</div>
						<img
							src={data.images[2].url || data.images[1].url || data.images[0].url}
							alt="No preview"
						/>
						<a href={data.external_urls.spotify}>{data.name}</a>
					</div>
					<div class="p-1" style="font-size: small;">{data.album_type}</div>
				</div>
			{/each}
		</div>
	{/if}
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
