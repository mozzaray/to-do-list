<script setup>
import Card from './base/card.vue'
import Btn from './base/Button.vue'
</script>

<template>
    <Card>
       
        <div class="flex gap-2 justify-between">
            <input type="checkbox" class="w-0 h-0 opacity-0 absolute">
            <div class="border-2 border-gray-300 rounded w-5 h-5 flex-shrink-0"></div>

            <div class="w-10/12 flex-shrink-0">
               <slot></slot> 
            </div>
            
    
            <Btn icon="delete" bgcolor="red" /> 
        </div>
            
    </Card>
  
</template>