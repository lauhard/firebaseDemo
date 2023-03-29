<script lang="ts">
	// import { getAuth } from 'firebase/auth';
    import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
	import { applyAction, deserialize, enhance, type SubmitFunction } from '$app/forms';
    import { page } from '$app/stores';
    import type { ActionResult } from '@sveltejs/kit';
    import { auth } from "$lib/firebase/client/initialize";
    import type { HtmlTag } from "svelte/internal";
    import { invalidateAll } from "$app/navigation";
    import { enhancer } from "$lib/actions";



    const handleSignIn:SubmitFunction = async (event) =>{
        const user = {
            firstname:event.data.get("firstname"),
            lastname:event.data.get("lastname"),
            password:event.data.get("password")?.toString() || "",
            email:event.data.get("email")?.toString() || ""
        }
        console.log(user);
        const userCredentials = await createUserWithEmailAndPassword (auth, user.email, user.password)
        const userx = userCredentials.user;
        console.log(userx);
      
    }

 

    const submitAction:SubmitFunction = async (event) => {
        const formData = new FormData(event.form as HTMLFormElement);
        const response = await fetch(event.form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'x-sveltekit-action': 'true'
            }
        });
        const result = deserialize(await response.text());
        console.log("result",result)
        if (result.type === 'success') {
            // re-run all `load` functions, following the successful update
            // await invalidateAll();
        }
        applyAction(result);
    }

</script>

<form class="form" method="POST" use:enhance={submitAction} action="?/signup" >
    <div class="grid">
        <label for="firstname">
            First name
            <input type="text" id="firstname" name="firstname" placeholder="First name" required>
        </label>

        <label for="lastname">
            Last name
            <input type="text" id="lastname" name="lastname" placeholder="Last name" required>
        </label>
        <label for="password">
            Password
            <input type="text" id="password" name="password" placeholder="Password" required>
        </label>
    </div>
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="Email address" required>
    <button type="submit">Submit</button>
</form>

<style lang="scss">
 
</style>