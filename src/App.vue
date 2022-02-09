<template>
  <div id="app">
    <div class="content">
    <Header />
    <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
  //padding-top: 60px;
}
</style>
