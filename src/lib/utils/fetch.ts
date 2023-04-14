/**
 * call Action
 * @param actionUrl 
 * @param body 
 * @param method 
 * @returns 
 */
export const callAction = async (actionUrl:string, body:BodyInit | null | undefined, method:string | undefined)=>{
    const response = await fetch(actionUrl, {
        method: method,
        body: body,
        headers: {'x-sveltekit-action': 'true'}
    });
    return response;
}