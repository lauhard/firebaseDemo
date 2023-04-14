
import type { LayoutServerLoad } from "./$types"
export const load = (async({cookies, request, locals, params, url}) => {
    if(locals.user == null) {
        cookies.delete("session")
        console.log("session deleted...");
    }

    return {
        user: locals.user,
        claims: locals.claims
    };
}) satisfies LayoutServerLoad

