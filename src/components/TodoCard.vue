<script setup>
import Card from './base/Card.vue'
import Btn from './base/Button.vue'
import { ref, watch } from 'vue';

const props = defineProps({
    index: Number,
    delete: Function,
})
const model = defineModel(); //item.done
const emit = defineEmits(['update:deleteTodo']);
// const getValue = (index) => {
//     emit('update:deleteTodo', index);
// }

</script>

<template>
    <!-- <div> -->
        <Card class="flex gap-2 justify-between items-center"
        :class="model ? 'opacity-60' : ''">
                <label :for="index" class="flex-grow cursor-pointer flex gap-2 content-center flex-nowrap" >
                    
                    <div class="border-2 border-gray-300 rounded w-5 h-5 flex-shrink-0
                    has-[:checked]:bg-blue-500 has-[:checked]:border-blue-500"
                    >
                        <input :id="index" type="checkbox" v-model="model" :disabled="model"
                            class="w-0 h-0 opacity-0 absolute peer">   
                        <div class="justify-center content-center text-white hidden peer-checked:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>

                        </div>
                    </div>

                    <div class="flex-grow break-words">
                        <slot></slot> 
                    </div>
                    
                </label> 
            
                <Btn class="flex-shrink-0" icon="delete" bgcolor="red" @click="props.delete" /> 
        </Card>
   
    
  
</template>

<style scoped>
/* *{
    outline: 1px solid salmon;
} */

</style>