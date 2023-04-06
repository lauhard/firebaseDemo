import uiStore from "$lib/stores/uiStore";
import type { User } from "$lib/types/user";
import type { LayoutServerLoad } from "./$types"
export const load = (async({cookies, request, locals, params, url}) => {
    return {
        user: locals.user,
        claims: locals.claims
    };
}) satisfies LayoutServerLoad