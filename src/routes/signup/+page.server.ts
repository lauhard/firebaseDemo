import type { Actions } from "./$types";


export const actions: Actions = {
    signup: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("signup action", data);
    }
}