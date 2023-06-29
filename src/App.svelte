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
  
    <div class="flex justify-end">
      <button class="btn" on:click={logout}>Logout</button>
    </div>

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
