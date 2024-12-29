<script setup>
import { ref } from 'vue';

defineProps({
    icon: {
        type: String, //icon用法: add-加號
        default: 'add'
    },
    bgcolor: {
        type: String,
        default: 'blue'
    }
    
});


</script>

<template>
    <button class="w-10 h-10 rounded flex justify-center items-center"
            :class="{'bg-blue-500 hover:bg-blue-600': bgcolor == 'blue', 'bg-red-600 hover:bg-red-700': bgcolor == 'red'}">
        <div v-if="icon == 'add'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
        </div>
        <div v-if="icon == 'delete'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-octagon-x"><path d="m15 9-6 6"/><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path d="m9 9 6 6"/></svg>
        </div>
        
    </button>
</template>

