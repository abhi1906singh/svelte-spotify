import type { RequestHandler } from './$types';
import { SPOTIFY_URL } from '$env/static/private';
export const GET: RequestHandler = async ({ url, fetch, cookies }) => {
	const query = url.searchParams.get('q');
	if (!query) {
		return new Response(JSON.stringify({ error: 'Missing query' }), { status: 400 });
	}
	const accessToken = cookies.get('access_token');
	if (!accessToken) return new Response('No access token', { status: 401 });

	const searchResult = await fetch(`${SPOTIFY_URL}/search?q=${query}&type=album&limit=5`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json'
		}
	});

	const data = await searchResult.json();
	console.log(data, '===========');
	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	});
};
