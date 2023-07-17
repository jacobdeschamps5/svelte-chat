<script lang="ts">
  import Icon from '@iconify/svelte';
  import {auth} from "../firebase";
  import Sidebar from './Sidebar.svelte';
  import {openSideBar} from '../stores';
  
</script>

<div class="flex justify-between  p-4 bg-slate-800">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click|stopPropagation={()=>{openSideBar.set(true)}}>
        <Icon icon="mingcute:menu-fill" class="hover:scale-105 cursor-pointer " color="#3BC2FF" width=25 height=25 />
        <Sidebar></Sidebar>
    </div>

    <div class="text-white">Jaewon</div>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={()=>{ auth.signOut(); } }>
        <Icon icon="tabler:logout" class="hover:scale-105 cursor-pointer " color="#3BC2FF" width=25 height=25 />
    </div>
  </div>