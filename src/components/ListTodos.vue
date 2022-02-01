<template>
  <div>
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Добавить задачу</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="Например, покормить кота"
      />
      <button>Добавить</button>
    </form>
    <ul>
      <li
        is="todoItem"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<script>
import todoItem from "./Todos.vue";

export default {
  name: "ListTodos",
  components: {
    todoItem,
  },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Помыть посуду",
        },
        {
          id: 2,
          title: "Вынести мусор",
        },
        {
          id: 3,
          title: "Подстричь газон",
        },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId,
        title: this.newTodoText,
      });
      
      this.nextTodoId +=1;
      this.newTodoText = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
