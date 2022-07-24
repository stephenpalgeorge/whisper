import {writable} from "svelte/store";

// track a username given by the user, initially an empty string.
export const userStore = writable("");