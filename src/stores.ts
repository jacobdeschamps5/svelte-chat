import {writable} from 'svelte/store'
import {auth} from "./firebase";

export let user = writable(auth.currentUser);
export let openSideBar = writable(false);
