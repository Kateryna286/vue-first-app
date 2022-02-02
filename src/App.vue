<template>
  <div :id="$style.app">
    <StarRating :rating="4"/>
  </div>
</template>

<script>
import StarRating from './components/StarRating.vue'

export default {
  name: 'App',
  components: {
    StarRating
  },
  data() {
    return {
      
    }
  },
  computed: {
    
  }, 
  methods: {
    
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
