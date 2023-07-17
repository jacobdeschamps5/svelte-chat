<script lang="ts">
  import Icon from "@iconify/svelte";
  import { afterUpdate, onDestroy, onMount } from 'svelte';
  import {openSideBar} from '../stores';

  let sideBar;


  const handleClickOutside = (event) => {
    if ($openSideBar && sideBar && !sideBar.contains(event.target)) {
      openSideBar.set(false);
    }
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });

</script>


<div bind:this={sideBar} class={`${$openSideBar?'translate-x-0 ':'-translate-x-full invisible'} transition-all ease-in-out duration-300 ui-component bg-black text-white h-screen top-0 left-0 w-96 fixed z-10`}>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click|stopPropagation={()=>{openSideBar.set(false)}}>
        <Icon icon="mingcute:close-fill" height=25 width=25 class="mt-4 ml-3 hover:scale-105 cursor-pointer"/>
    </div>
    <ul>
        <li class="cursor-pointer px-4 py-2 select-none">Menu Item 1 </li>
        <li class="cursor-pointer px-4 py-2 select-none">Menu Item 2</li>
        <li class="cursor-pointer px-4 py-2 select-none">Menu Item 3</li>
    </ul>
    
</div>