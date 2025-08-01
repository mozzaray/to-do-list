<script setup>
import InputCard from './components/InputCard.vue';
import TodoCard from './components/TodoCard.vue';
import { ref } from 'vue';

// const blank = ref(false);
// const todoInput = ref('');
const todoData = ref([]);

const addTodo = (emitVal) => {
  const newTodo = emitVal.trim();
  if (newTodo) {
    todoData.value.unshift(newTodo);
  }
}

</script>

<template>
  <section class="bg-gray-300 w-full min-h-screen">

    <div class="w-7/12 flex flex-col items-center gap-3 py-5 mx-auto">
       <h5 class="font-bold">To-do List</h5>
    
      <InputCard @update:add-todo="addTodo"></InputCard>
      
      <div class="self-end">
        <h6>Completed Tasks</h6>
      </div>
      <!-- list cards -->
      <TodoCard v-for="(item, index) in todoData" :index="index"
        @update:delete-todo="todoData.splice($event, 1)">
        {{ item }}
      </TodoCard>
    </div>
   

  </section>
 
</template>
