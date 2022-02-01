<template>
  <div :id="$style.app">
    <!-- <h1>{{ title }}</h1>
    <Button @click="increment" outlined>Click me</Button> -->
    <!-- <DirectivesTest /> -->
    <!-- <Todos/> -->
    <!-- <Test1/>
    <Test2/> -->
    <ListTodos/>
  </div>
</template>

<script>

//import Button from './components/Button.vue'
// import DirectivesTest from './components/DirectivesTest.vue'
// import Todos from './components/Todos.vue'
// import Test1 from './components/Test1.vue'
// import Test2 from './components/Test2.vue'
import ListTodos from './components/ListTodos.vue'

export default {
  name: 'App',
  components: {
    //Button,
    // DirectivesTest,
    // Todos,
    // Test1,
    // Test2,
    ListTodos
  },
  data() {
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title() {
      return `Amount of clicks: ${this.amountOfClicks}`
    }
  }, 
  methods: {
    increment() {
      this.amountOfClicks += 1
    } 
  }
}
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
