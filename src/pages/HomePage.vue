<template>
<SectionSpacer>
<Container>
    <ApartmentFilterForm class="apartments-filter" @submit="setFilter" />
    <p v-if="!filteredApartments.length">По вашему запросу ничего не найдено</p>
    <ApartmentsList v-else :items="filteredApartments">
      <!-- <template v-slot:title>New title</template> -->
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :id="apartment.id"
          :key="apartment.id"
          :descr="apartment.descr"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
        />
      </template>
    </ApartmentsList>
  </Container>
</SectionSpacer>
  
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import Container from "../components/shared/Container.vue";
import SectionSpacer from '../components/shared/SectionWithHeaderSpacer.vue'

import { getApartsmentsList } from "../services/apartments.service";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
    SectionSpacer
  },
  data() {
    return {
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartsmentsList()
      this.apartments = data
    } catch (error) {
      console.error(error)
    }
    
  },
  methods: {
    setFilter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
