import { applyAction } from "$app/forms";
import { invalidateAll } from "$app/navigation";
import type { ActionResult } from "@sveltejs/kit";


export const formAction = ({form, data, action, cancel, submitter }: any, callback: (arg0: string, arg1: { result: any; }) => void, functionName:string)=>{
    return async (action: { result: ActionResult<Record<string, any>, Record<string, any>>; }) =>{
        const result = action.result as ActionResult<Record<string, any>, Record<string, any>>
        const isValid = result.type
        if(isValid) {
            await invalidateAll()
        }
        await applyAction(result)
        callback(functionName, {"result": result})
    }
}
