<script lang="ts">
  import {auth, provider, user} from "./firebase";
  import Chatroom from "./lib/Chatroom.svelte";
  import ChatInput from "./lib/ChatInput.svelte";
  import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
  import NavBar from "./lib/NavBar.svelte";

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

</script>

<main class="dark:bg-black">
  {#if $user}
    <div class="w-screen h-screen flex flex-col">

      <NavBar/>
      <Chatroom/>
      <ChatInput/>

    </div>
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
