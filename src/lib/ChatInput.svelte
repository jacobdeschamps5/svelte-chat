<script lang="ts">
  import { addDoc, serverTimestamp, collection} from "firebase/firestore";
  import {db, user} from "../firebase" 

  let message: string;

  const sendMessage = async() =>{
    console.log(message);

    await addDoc(collection(db, "messages"), {
      text: message,
      createdAt: serverTimestamp(),
      uid: $user.uid,
      name: $user.displayName
    });

    message="";
  }

</script>

<div class="fixed bottom-0 w-full py-4 bg-gradient-to-b from-transparent to-purple-950">
    <form class="px-16 containerWrap flex mt-6" on:submit|preventDefault={sendMessage}>
      <input class="input w-full focus:outline-none bg-slate-950 rounded-r-none" type="text" placeholder="Send a message" bind:value={message} />
      <button class="w-auto bg-sky-700 text-white rounded-r-lg px-5 text-sm ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        
      </button>
    </form>
</div>
