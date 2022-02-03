<template>
  <div :id="$style.app">
    <ApartmentsList :items="apartments"/>
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList.vue'
import apartments from './components/apartment/apartments'

export default {
  name: "App",
  components: {
   ApartmentsList
  },
  data() {
    return {
      apartments
    };
  },
  computed: {},
  methods: {},
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
