<script lang="ts">
  import {user} from "../firebase"
  
  export let text: string;
  export let name: string;
  export let id: string
</script>

<main>

  <div class="chat {$user.uid === id? "chat-end" : "chat-start"} pt-8 px-4 pl-16">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full bg-black">
      </div>
    </div>
    <div class="chat-bubble max-w-xl">
      {text}
    </div>
    <div class="text-sm">
      {name}
    </div>
  </div>
</main>



<style>

</style>
