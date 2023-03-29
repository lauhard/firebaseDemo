import { applyAction, deserialize  } from "$app/forms"

export const enhancer= (form: HTMLFormElement) => {
    const submitAction = async (event:SubmitEvent) => {
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
        console.log("result",result)
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