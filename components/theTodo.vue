<script setup>
const { deleteTodo, completeTodo } = useTodo();
const props = defineProps({
  todo: Object,
});
</script>

<template>
  <div class="border p-2 rounded-lg">
    <div class="flex justify-between">
      <div class="flex gap-2 items-center">
        <button @click="completeTodo(todo.id)">
          <Icon
            name="material-symbols:check-circle"
            :color="todo?.isCompleted ? 'gray' : 'green'"
            size="24"
          ></Icon>
        </button>

        <span class="text-lg font-semibold" v-if="todo?.isCompleted">
          <del>{{ todo?.name }}</del>
        </span>
        <span class="text-lg font-semibold" v-else> {{ todo?.name }} </span>
      </div>
      <button @click="deleteTodo(todo?.id)">
        <Icon name="material-symbols:delete" color="red" size="24"></Icon>
      </button>
    </div>
  </div>
</template>
