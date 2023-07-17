<script lang="ts">
  import { addDoc, serverTimestamp, collection} from "firebase/firestore";
  import {db} from "../firebase" ;
  import {user} from "../stores"
  import Icon from '@iconify/svelte';


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


<form on:submit|preventDefault={sendMessage}>
  <div class="mb-4 bottom-0 mx-16 border-2 border-gray-200 border-opacity-25 flex text-white items-center rounded-2xl">
    <input class="input bg-transparent w-full  focus:outline-none " type="text" placeholder="Send a message" bind:value={message} />    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="pr-4 hover:scale-105 cursor-pointer" on:click={sendMessage}>
      <Icon icon="mingcute:send-line"  width="25" height="25" color="#3BC2FF" /> 
    </div>
  </div>
</form>


