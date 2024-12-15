<script setup>
const props = defineProps({
    icon: {
        type: String, //icon用法: add-加號
        default: 'add'
    },
    
});
</script>

<template>
    <button class="w-10 h-10 rounded bg-blue-500 flex justify-center items-center
                    hover:bg-blue-600">
        <div v-if="icon == 'add'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
        </div>
        
    </button>
</template>

