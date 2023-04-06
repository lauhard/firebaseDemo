import { writable } from "svelte/store";

interface UiState {
    admin:boolean,
    dashboard:boolean
}

const uiState: UiState={
    admin:false,
    dashboard:false,
}

const uiStore = writable<UiState>(uiState)

export default uiStore;
