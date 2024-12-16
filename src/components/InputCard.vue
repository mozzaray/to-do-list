<script setup>
import Card from './base/card.vue'
import Input from './base/Input.vue'
import Btn from './base/Button.vue'
</script>

<template>
    <Card>
            <slot></slot>

            <div class="flex gap-2 justify-between">
            <Input />
            <Btn icon="add" bgcolor="blue" /> 
            </div>
            
    </Card>
  
</template>