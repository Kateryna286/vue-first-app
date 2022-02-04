<template>
  <div :id="$style.app">
    <h1>{{ text }}</h1>
    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="logger"/>
    </Container>

    <ApartmentsList :items="apartments">
      <!-- <template v-slot:title>New title</template> -->
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import apartments from "./components/apartment/apartments";
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import Container from "./components/shared/Container.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
  },
  data() {
    return {
      text: "",
      apartments,
    };
  },
  computed: {},
  methods: {
    logger(value) {
      console.log(value)
    }
  },
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
