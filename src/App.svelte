<script lang="ts">
  import {auth, provider} from "./firebase";
  import {authState} from "rxfire/auth";

  import ChatInput from './lib/ChatInput.svelte';
  import Message from './lib/Message.svelte';

  import "@picocss/pico";
  import { signInWithPopup } from "firebase/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(usr => user = usr);
  
  const login = () => {
    signInWithPopup(auth, provider);
  }

</script>

<main>
  {#if user}
    Logged in as {user.uid}  
  {:else}
    <button on:click={login}>
        Sign in with Google
    </button>
  {/if}
</main>

<style>
    main{
        margin-bottom: 100px
    }
</style>
