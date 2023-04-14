
export const navigation = (node: HTMLElement) => {
    const logout = async (e: Event) => {
        node.dispatchEvent(new CustomEvent('logout', e))
    }
    node.addEventListener('click', logout)
    return {
        destroy() {
            node.removeEventListener('click', logout);
        }
    }
}
