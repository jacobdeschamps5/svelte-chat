<script lang="ts">
  import { writable } from "svelte/store";
  import {auth, provider, user} from "./firebase";
  import Chatroom from "./lib/Chatroom.svelte";

  import Message from './lib/Message.svelte';
  import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

  //Listen for auth change
  onAuthStateChanged(auth, () => {
    user.set(auth.currentUser);
    console.log($user);
});
  
  const login = () => {
      signInWithPopup(auth, provider)
      .catch((error) => {
      console.log(error.message);
    });
  }

  const logout = () => {
      auth.signOut();
  }

</script>

<main>
  {#if $user}

    <button class="btn btn-square fixed right-2 top-2 z-10" on:click={logout}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"/></svg>
    </button>

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
