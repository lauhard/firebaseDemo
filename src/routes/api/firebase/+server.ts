import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const DELETE = (async ({ request, cookies }) => {
    
    console.log("delete session...");

    // cookies.delete("session");
    cookies.set("session", "", {
        httpOnly: true,
        path: '/',
        maxAge: 0
      })

    console.log("session deleted...");
    return json({"success":true})

}) satisfies RequestHandler
