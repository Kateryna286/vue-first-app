<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    {{ $store.state.userName }}
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Notifications from "./components/notifications/index.vue";
import {mapGetters} from 'vuex'

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Notifications,
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  mounted() {
    console.log(this.isLoggedIn);
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
}
</style>
