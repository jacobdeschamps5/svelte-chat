<script lang="ts">
  import {auth} from "./firebase";
  import {authState} from "rxfire/auth";

  import ChatInput from './lib/ChatInput.svelte';
  import Message from './lib/Message.svelte';
  import '@picocss/pico'

</script>

<main>
  <Message/>
  <Message/>
  <Message/>
  <Message/>
  <Message/>
  <Message/>
  <ChatInput/>
</main>


<style>
    main{
        margin-bottom: 120px
    }

</style>
