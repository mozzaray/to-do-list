<script setup>
import Card from './base/card.vue'
import Input from './base/Input.vue'
import Btn from './base/Button.vue'

defineProps({
 isBlank: Boolean,
 clickAdd: Function,
 modelValue: String,
});
const emit = defineEmits(['update:modelValue']);

</script>

<template>
    <Card>
            <slot></slot>

            <div class="flex gap-2 justify-between">
            <div class="w-full">
               <Input 
                :value="modelValue"
                @input="emit('update:modelValue', $event.target.value)"
                 />
                <p v-show="isBlank" class="mt-1 text-red-600">
                    please type something
                </p>  
            </div>
            
            <Btn icon="add" bgcolor="blue" @click="clickAdd" /> 
            </div>
            
    </Card>
  
</template>