<script lang="ts">
  import {user} from "../firebase"
  
  export let text: string;
  export let name: string;
  export let id: string
</script>

<main>
  <div class="chat {$user.uid === id? "chat-end" : "chat-start"} pt-4 px-4">
    <div class="chat-header text-xs opacity-50 pb-2">{name}</div>
    <div class="chat-image avatar">
      <div class="w-10 rounded-full bg-black">
      </div>
    </div>
    <div class="chat-bubble max-w-xl">{text}</div>
  </div>

</main>



<style>

</style>
