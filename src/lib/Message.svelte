<script lang="ts">
  import {user} from "../stores"
  
  export let text: string;
  export let name: string;
  export let id: string
</script>

<main>
  <div class="chat {$user.uid === id? "chat-end" : "chat-start"} px-4">
    <div class="chat-header text-xs text-white pb-2">{name}</div>
    <div class="chat-image avatar">
      <div class="w-10 rounded-full bg-white">
      </div>
    </div>
    <div class="chat-bubble text-white max-w-xl">{text}</div>
  </div>

</main>



<style>

</style>
