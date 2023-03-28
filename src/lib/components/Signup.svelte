<script lang="ts">
	// import { getAuth } from 'firebase/auth';
    import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
	import { applyAction, deserialize, enhance, type SubmitFunction } from '$app/forms';
    import { page } from '$app/stores';
    import type { ActionResult } from '@sveltejs/kit';
    import { auth } from "$lib/firebase/client/initialize";


    console.log("data", $page.form);

    


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

    type User =  {
        firstname:string,
        lastname:string,
        password:string,
        email:string
    }

    const submitAction = async (event) => {
        // const formData = new FormData(event.target as HTMLFormElement)
        // const user:User = {
        //     'firstname': formData.get("firstname") as string || "",
        //     'lastname': formData.get("lastname") as string || "",
        //     'password': formData.get("password") as string || "",
        //     'email': formData.get("email") as string || ""
        // }
        // console.log(user);
        // const userCredentials = await createUserWithEmailAndPassword (auth, user.email, user.password)
        // const userx = userCredentials.user;
        // console.log(userx);
        const formData = new FormData(event.target as HTMLFormElement);
        const response = await fetch(event.action, {
            method: 'POST',
            body: formData
        });

        const result = deserialize(await response.text());

        console.log("result", result);
    }

</script>

<!-- <form class="form" method="POST" use:enhance action="?/signup" > -->
<!-- <form class="form" method="POST" action="?/signup" on:submit|preventDefault use:enhance={handleSignIn} > -->
<form class="form" action="?/signup" on:submit|preventDefault = {submitAction}>
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
<!-- </form> -->

<style lang="scss">
 
</style>