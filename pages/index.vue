<script setup>
const { todos, addTodo, deleteAllTodo, deleteCompletedTodo } = useTodo();

const todo = ref({
  name: "",
  isCompleted: false,
});

const addTodoHandler = () => {
  addTodo({ ...todo.value, id: Math.floor(Math.random() * 100) });
  todo.value.name = "";
};
</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <h1 class="text-3xl font-semibold">Test Project Todo List</h1>
    <v-card class="w-1/2 mt-4">
      <div class="p-4 flex flex-col gap-4">
        <div class="flex justify-end items-center">
          <v-chip class="ma-2" label> Tasks {{ todos?.length }}</v-chip>
          <v-chip class="ma-2" label color="green">
            Completed Tasks
            {{ todos.filter((obj) => obj.isCompleted).length }}</v-chip
          >
          <v-btn
            size="small"
            color="red"
            class="text-white mr-1.5"
            v-if="todos.filter((obj) => obj.isCompleted).length > 0"
            @click="deleteCompletedTodo"
          >
            <Icon name="material-symbols:delete" /> Delete Completed Tasks
          </v-btn>
          <v-btn
            size="small"
            color="red"
            class="text-white"
            @click="deleteAllTodo"
          >
            <Icon name="material-symbols:delete" /> Delete Tasks
          </v-btn>
        </div>
        <div
          class="border p-4 shadow-lg flex flex-col gap-2"
          v-if="todos.length > 0"
        >
          <TheTodo v-for="todoItem in todos" :todo="todoItem" />
        </div>
        <div class="flex gap-2 justify-center">
          <v-text-field
            v-model="todo.name"
            label="Todo"
            clearable
            variant="outlined"
          >
          </v-text-field>
          <v-btn size="large" @click="addTodoHandler">
            <Icon name="material-symbols:add" /> Add</v-btn
          >
        </div>
      </div>
    </v-card>
  </div>
</template>
