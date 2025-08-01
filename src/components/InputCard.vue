<script setup>
import Card from './base/Card.vue'
import Input from './base/Input.vue'
import Btn from './base/Button.vue'
import { ref } from 'vue';

// defineProps({
//     isBlank: Boolean,
//     clickAdd: Function,
//     modelValue: String,
// });
const isBlank = ref(false);
const note = ref('');

const emit = defineEmits(['update:addTodo']);

const clickAdd = function() {
    console.log(note.value)
    if(note.value === '') {
        isBlank.value = true;
    } else {
        isBlank.value = false;
        emit('update:addTodo', note.value);
        note.value = '';
    }
}
</script>

<template>
    <Card>
            <slot></slot>

            <div class="flex gap-2 justify-between">
            <div class="w-full">
               <Input v-model="note"
                    @keydown.enter="clickAdd"/>
                <p v-show="isBlank" class="mt-1 text-red-600">
                    please type something
                </p>  
            </div>
            
            <Btn icon="add" @click="clickAdd"
                /> 
            </div>
            
    </Card>
  
</template>