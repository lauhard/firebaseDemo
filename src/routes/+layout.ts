import { user } from "$lib/stores/fireStore";
import uiStore from "$lib/stores/uiStore";
import type { LayoutLoad } from "./$types";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "$lib/firebase/client/initialize";

export const load = (async (data)=>{
    uiStore.set({admin:data.data.claims.admin, dashboard:data.data.claims.dashboard})
}) satisfies LayoutLoad