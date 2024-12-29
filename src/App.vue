<script setup>
import InputCard from './components/InputCard.vue';
import TodoCard from './components/TodoCard.vue';
import { ref } from 'vue';

const blank = ref(false);
const todoInput = ref('');
const todoData = ref(
  [
    "buy milk", "read a book"
  ]
)

const addTodo = function(){
  console.log(blank.value, todoInput.value);
  if(todoInput.value == ''){
    blank.value = true;
  }else{
    blank.value = false;
  }
}

</script>

<template>
  <section class="bg-gray-300 w-full h-screen flex flex-col items-center gap-3">
    <h5>Todo List</h5>
    
    <InputCard v-model="todoInput" :click-add="addTodo" :is-blank="blank"></InputCard>
    
    <!-- list cards -->
    <TodoCard v-for="(item, index) in todoData" :label-name="index">
     {{ item }}
    </TodoCard>

  </section>
 
</template>
