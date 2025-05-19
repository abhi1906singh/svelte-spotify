import { SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET } from "$env/static/private";
import { error, type RequestHandler } from "@sveltejs/kit";

export const GET:RequestHandler=async({cookies,fetch})=>{
    const refreshToken=cookies.get('refresh_token');
    const response=await fetch('https://accounts.spotify.com/api/token',{
            method:"POST",
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization:`Basic ${Buffer.from(`${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`)
                .toString('base64')}`
                },
                body:new URLSearchParams({
                            grant_type: 'refresh_token',
                            refresh_token: refreshToken || '', 
                            // client_id:SPOTIFY_APP_CLIENT_ID 
                        })
    });
    const responseJSON=await response.json();
    if(responseJSON.error){
        cookies.delete('refresh_token',{path:'/'})
         cookies.delete('access_token',{path:'/'})
         throw error(401,responseJSON.error_description);
    }
    console.log(responseJSON,'responseJSONssssssssssssssss=====');
    cookies.set('access_token',responseJSON.access_token,{path:'/'});
         if (responseJSON.refresh_token) {
      localStorage.setItem('refresh_token', responseJSON.refresh_token);
    }
    return responseJSON;
}