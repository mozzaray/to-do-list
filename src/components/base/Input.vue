<script setup>

const model = defineModel();
</script>

<template>
    <div class="w-full">
        <input class="w-full h-10 px-1 border-2 border-gray-300 bg-transparent rounded transition
                focus:outline-none focus:border-blue-500"
                v-model="model"/>
    </div>
   
</template>
