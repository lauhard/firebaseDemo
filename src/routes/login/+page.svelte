<script lang="ts">
    import { goto } from "$app/navigation";
    import Login from "$lib/components/Login.svelte";
    import { signInWithEmailAndPassword } from "$lib/firebase/client/helper";
    import { authUser } from "$lib/stores/fireStore";
    import uiStore from "$lib/stores/uiStore";
    import type { Credentials } from "$lib/types/credentials";
    import { fetchUserFromFireBase } from "$lib/utils/shared";
    import Layout from "../+layout.svelte";
    import type { PageServerData } from "./$types";
    
    export let data: PageServerData;
    let formError:string = "";
    $authUser
    $:user = data.user;
    $:console.log("user", user);
    $:console.log("data", data);

    const login = async (e:CustomEvent)=>{
        const event = e.detail.event;
        const target:HTMLFormElement = event.target;
        const formData = new FormData(target);

        const userData:Credentials = {
            "email": formData.get("email")?.toString() || "",
            "password": formData.get("password")?.toString() || ""
        }

        if(userData.password && userData.email) {

            try {

                const result = await signInWithEmailAndPassword(userData)
                if(result.userCredentials?.user != null) {
                    const idToken = await result.userCredentials.user.getIdToken();
                    const response = await fetchUserFromFireBase(idToken);
                    if(response.ok && response.status === 200) {
                        const {claims} = await result.userCredentials.user.getIdTokenResult();
                        uiStore.set({admin:claims.admin, dashboard:claims.dashboard})
                        goto('/dashbord');
                    }
                }
                else {
                    formError=result.error
                }
            } catch (error:any) {
                console.log(error)
            }
        }
    }
</script>
<h1>Login</h1>

<p>user from server: {user?.uid} </p>
<p>user from store: { $authUser?.uid}</p>

<Login on:login={login} {formError}></Login>