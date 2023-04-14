import uiStore from "$lib/stores/uiStore";
import type { LayoutLoad } from "./$types";

export const load = (async (data)=>{
    uiStore.set({admin:data.data.claims.admin, dashboard:data.data.claims.dashboard, loggedIn:data.data?.user?.uid ==null ? false:true})
}) satisfies LayoutLoad