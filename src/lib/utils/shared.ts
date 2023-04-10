export const fetchUserFromFireBase = async (idToken:string) => {
    console.log("fetchUserFromFireBase",idToken )
    const response = await fetch('../../api/firebase', {
        body: JSON.stringify({ idToken }),
        method: "POST",
        headers: {
            'Content-Type':'application-json',
            'x-sveltekit-action': 'true'
        }
    })
    return response;
}