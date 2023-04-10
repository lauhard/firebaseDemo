import { applyAction, deserialize } from "$app/forms"
import { json } from "@sveltejs/kit"

export const enhancer = (form: HTMLFormElement) => {
    const submitAction = async (event: SubmitEvent) => {
        event.preventDefault()
        const data = new FormData(form)
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'x-sveltekit-action': 'true'
            }
        })
        const result = deserialize(await response.text());
        if (result.type === 'success') {
            // re-run all `load` functions, following the successful update
            // await invalidateAll();
        }
        applyAction(result);
    }
    form.addEventListener('submit', submitAction)
    return {
        destroy: () => {
            form.removeEventListener('submit', submitAction)
        },
    }
}
export const fire = (node: HTMLElement) => {
    const logout = async (e: Event) => {
        node.dispatchEvent(new CustomEvent('logout', e))
        const response = await fetch('../../api/firebase', {
            method:'DELETE',
            headers:{
                'Content-Type':'application-json',
                'x-sveltekit-action': 'true'
            }
        })
        console.log("logout response", response.body);
    }
    node.addEventListener('click', logout)

    const login = async (event: Event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        console.log("login form", form)
    }
    node.addEventListener('click', login)

    return {
        destroy() {
            node.removeEventListener('click', login);
            node.removeEventListener('click', logout);
        }
    }
}
