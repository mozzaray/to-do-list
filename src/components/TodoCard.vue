<script setup>
import Card from './base/card.vue'
import Btn from './base/Button.vue'
import { ref } from 'vue';

defineProps({
    labelName: Number,
})
// const tickBox = function(){
//     ifCheck.value = !ifCheck.value;
// };

const getValue = function(){
    let input = document.getElementById('test')
    console.log(input.checked)
}
</script>

<template>
    <!-- <div> -->
        <Card class="flex gap-2 justify-between has-[:checked]-opacity-40">
            <!-- <div > -->
                <label :for="labelName" class="flex-grow cursor-pointer flex gap-2" >

                    <div class="border-2 border-gray-300 rounded w-5 h-5 flex-shrink-0
                    has-[:checked]:bg-blue-400 goup"
                    >
                        <input :id="labelName" type="checkbox" class="w-0 h-0 opacity-0 absolute peer">   
                        <div class="justify-center content-center text-blue-700 hidden peer-checked:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>

                        </div>
                    </div>

                    <div class="flex-grow break-words">
                        <slot></slot> 
                    </div>
                    
                </label> 
            
                    <Btn class="flex-shrink-0" icon="delete" bgcolor="red" @click="getValue" /> 
                <!-- </div> -->
            </Card>
    <!-- </div> -->
   
    
  
</template>

<style scoped>
/* *{
    outline: 1px solid salmon;
} */

</style>