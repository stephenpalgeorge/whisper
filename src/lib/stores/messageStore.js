import {writable} from "svelte/store";

// track a collection of 'messages' - initially an empty array.
export const messageStore = writable([]);