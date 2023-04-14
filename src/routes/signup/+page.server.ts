
import type { Actions, PageServerLoad} from "./$types";
import { createUser, createCustomToken, setCustomUserClaims } from "$lib/firebase/admin/helper";
import type { UserRecord } from "$lib/types/userRecord";
import { logout } from "$lib/firebase/client/helper";

export const load = (async(event) => {
    return {
        user: event.locals.user,
        claims: event.locals.claims
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    signup: async ({cookies, request}):Promise<any> => {
        const data = await request.formData();
        const response:UserRecord = await createUser(data);
        if(response.uid != null) {
            await setCustomUserClaims(response.uid);
            response.customToken = await createCustomToken(response.uid);
        }
        if(response.errorInfo){
            return {
                success:false,
                ...response
            }
        }
        else {
            return {
                success:true,
                ...response
            }
        }
    }
} satisfies Actions;