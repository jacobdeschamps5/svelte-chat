<script lang="ts">
    import ChatInput from "./ChatInput.svelte";
    import Message from "./Message.svelte";
</script>

<div class="pb-24">
    <Message myMessage={true}/>
    <Message/>
    <Message/>
    <Message/>
</div>
<ChatInput/>

