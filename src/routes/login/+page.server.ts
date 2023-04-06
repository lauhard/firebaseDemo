import type { PageServerLoad} from "./$types";

export const load = (async({cookies, request, locals, params, url})=> {
    return {
        user: locals.user,
        claims: locals.claims
    };
}) satisfies PageServerLoad;
