<script lang="ts">
  export let myMessage: boolean = false;
</script>

<main>

  {#if myMessage}
    <div class="chat chat-end pt-8 px-4">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full bg-black">
          </div>
        </div>
        <div class="chat-bubble max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque libero obcaecati sed, impedit quisquam laborum, velit rerum quas soluta ut porro rem optio nihil magni atque saepe, id esse dolores!
        </div>
    </div>
  {:else}
  <div class="chat chat-start pt-6 px-4">
    <div class="chat-image avatar">
      <div class=" w-10 rounded-full bg-black">
      </div>
    </div>
    <div class="chat-bubble max-w-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque libero obcaecati sed, impedit quisquam laborum, velit rerum quas soluta ut porro rem optio nihil magni atque saepe, id esse dolores!
    </div>
</div>

  {/if}
</main>



<style>

</style>
