<script lang="ts">
  import {auth, provider} from "./firebase";
  import {authState} from "rxfire/auth";

  import ChatInput from './lib/ChatInput.svelte';
  import Message from './lib/Message.svelte';

  import { signInWithPopup } from "firebase/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(usr => user = usr);
  
  const login = () => {
    signInWithPopup(auth, provider);
  }

</script>

<main>
  {#if user}
    <ChatInput/>  
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
