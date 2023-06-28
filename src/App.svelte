<script lang="ts">
  import {auth, provider} from "./firebase";
  import {authState} from "rxfire/auth";
  import Chatroom from "./lib/Chatroom.svelte";

  import Message from './lib/Message.svelte';

  import { signInWithPopup } from "firebase/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(usr => user = usr);
  
  const login = () => {
    signInWithPopup(auth, provider);
  }

  const logout = () => {
      auth.signOut();
  }

</script>

<main>
  {#if user}
    <Chatroom/>
  {:else}
    <div class="flex justify-center items-center h-screen">
      <button class="btn items-center" on:click={login}>
        Sign in with Google
      </button>   
    </div>
  {/if}
</main>

<style>
</style>
