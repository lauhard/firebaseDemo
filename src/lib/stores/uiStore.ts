import { writable } from "svelte/store";

interface UiState {
    admin:boolean,
    dashboard:boolean
    loggedIn:boolean
}

const uiState: UiState={
    admin:false,
    dashboard:false,
    loggedIn:false,
}

const uiStore = writable<UiState>(uiState)

export default uiStore;
