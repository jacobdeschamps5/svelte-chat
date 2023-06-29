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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16l6-6-6-6"/><path d="M4 21v-7a4 4 0 0 1 4-4h11"/>
      </button>
    </form>
</div>
