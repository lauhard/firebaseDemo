import { getUserFromToken } from '$lib/firebase/admin/helper';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async({locals}) => {

    if(locals.claims.dashboard === false) throw redirect(307, '/login');

    const client = getUserFromToken(locals.user);

    return {
        client:client,
        claims:locals.claims
    }

    
}) satisfies PageServerLoad;