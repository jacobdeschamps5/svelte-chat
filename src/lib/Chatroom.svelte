<script lang="ts">
    import ChatInput from "./ChatInput.svelte";
    import Message from "./Message.svelte";
    import {db} from "../firebase"
    import { doc, onSnapshot, collection, query, orderBy, limit, } from "firebase/firestore";
    import { afterUpdate, onDestroy, onMount } from "svelte";
    import { writable } from "svelte/store";

    let messages = writable([]);

    let chatContainer;

    const q = query(collection(db, "messages"), orderBy('createdAt'), limit(50));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const m = snapshot.docs.map((doc) => ({...doc.data()}));
        messages.set(m);
    });
    
    onDestroy(() => unsubscribe);

        // Function to scroll to the bottom of the chat container
        const scrollToBottom = () => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    afterUpdate(scrollToBottom);
</script>


<div bind:this={chatContainer} class="scroll-smooth overflow-y-auto w-full h-full inset-x-0 mx-auto py-2">
    {#each $messages as message}
        <Message text={message.text} name={message.name} id={message.uid}/>
    {/each}
</div>


