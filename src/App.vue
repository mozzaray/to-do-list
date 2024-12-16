<script setup>
import InputCard from './components/InputCard.vue';
import TodoCard from './components/TodoCard.vue';
</script>

<template>
  <section class="bg-gray-300 w-full h-screen flex flex-col items-center gap-3">
    <h5>Todo List</h5>
    
    <InputCard></InputCard>
    
    <!-- list cards -->
    <TodoCard>
      buy milk
    </TodoCard>

  </section>
 
</template>
