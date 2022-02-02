<template>
  <div :id="$style.app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://nowywilczak.pl/wp-content/uploads/2016/04/default-placeholder.png"
    />
  </div>
</template>

<script>
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";

export default {
  name: "App",
  components: {
    ApartmentsItem,
  },
  data() {
    return {
      apartment: {
        id: "",
        title: "Pretty home",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 2500,
        rating: 4.3,
        location: {
          city: "",
        },
        owner: {
          name: "",
          phone: "",
          email: "",
        },
      },
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
