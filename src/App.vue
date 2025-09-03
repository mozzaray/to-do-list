<script setup>
import InputCard from './components/InputCard.vue';
import TodoCard from './components/TodoCard.vue';
import Btn from './components/base/Button.vue';
import { computed, ref, watch } from 'vue';

const todoData = ref([]);
const status = ref('undone'); // undone, done
const id = ref(1);

const addTodo = (emitVal) => {
  const newTodo = emitVal.trim();
  if (newTodo) {
    todoData.value.unshift({
      id: id.value++,
      text: newTodo,
      done: false,
    });
  }
}

const deleteData = (id) => {
  const index = todoData.value.findIndex(item => item.id === id);
  todoData.value.splice(index, 1);
}

const filterList = computed(() => {
  if(status.value === 'undone'){
    return todoData.value.filter(item => !item.done);
  }
  if(status.value === 'done'){
    return todoData.value.filter(item => item.done);
  }
});

</script>

<template>
  <section class="bg-gray-300 w-full min-h-screen">

    <div class="w-7/12 flex flex-col items-center gap-3 py-5 mx-auto">
       <h5 class="font-bold">To-do List</h5>
    
      <InputCard @update:add-todo="addTodo"></InputCard>
      
      <div class="self-end flex gap-2">
        <button type="button"
        :class="status == 'undone'
          ? 'border-indigo-600 border-2 bg-indigo-100 text-indigo-600 font-bold rounded px-4 py-2'
          : 'bg-white px-4 py-2 rounded text-slate-400 border-2 border-slate-400 font-bold'"
          @click="status = 'undone'"
        >
            <h6>Undone</h6>
        </button>
        
        <button type="button"
          :class="status == 'done'
          ? 'border-indigo-600 border-2 bg-indigo-100 text-indigo-600 font-bold rounded px-4 py-2'
          : 'bg-white px-4 py-2 rounded text-slate-400 border-2 border-slate-400 font-bold'"
          @click="status = 'done'"
        >
            <h6>Completed</h6>
        </button>

      </div>

      <!-- list cards -->
        <TodoCard v-for="(item, index) in filterList" :index="index"
          v-model="item.done"
          :key="item.text+index"
          :delete="() => deleteData(item.id)"
          >
          {{ item.text }}
        </TodoCard>     
    </div>
   

  </section>
 
</template>
