<script lang="ts">
    import ChatInput from "./ChatInput.svelte";
    import Message from "./Message.svelte";
    import {db} from "../firebase"
    import { doc, onSnapshot, collection, query, orderBy, limit, } from "firebase/firestore";
    import { onDestroy, onMount } from "svelte";
    import { writable } from "svelte/store";

    let messages = writable([]);

    const q = query(collection(db, "messages"), orderBy('createdAt'), limit(50));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const m = snapshot.docs.map((doc) => ({...doc.data(),}));
        messages.set(m);
        console.log($messages);
    });

    onDestroy(() => unsubscribe);
</script>

<main>
    <div class="pb-28">
        {#each $messages as message}
            <Message text={message.text} name={message.name} id={message.uid}/>
        {/each}
    </div>
    <ChatInput/>
</main>


