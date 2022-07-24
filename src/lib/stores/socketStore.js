import {readable} from "svelte/store";
import { io } from 'socket.io-client';

// create a socket.io connection and store the object for use elsewhere in the app.
export const socket = readable(null, function start(set) {
    const socket = io('http://localhost:3424');
    set(socket);

    return function stop() {
        socket.disconnect();
    }
});
