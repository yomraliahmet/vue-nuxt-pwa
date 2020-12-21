<template>
  <div class="row">
    <Todo
    @deleteTodoEvent="$emit('deleteTodoEvent', $event)"
    @updateTodoEvent="$emit('updateTodoEvent', $event)"
    v-for="todo in todos"
    :key="todo._id"
    :todo="todo"/>
  </div>
</template>

<script>
import Todo from '@/components/todo/Todo.vue'

export default {
  components : {
    Todo
  },
  props : {
    todos : {
      type : Array,
      required : false
    }
  }
}
</script>

<style>

</style>
