<template>
  <main class="apartment-page">
    <Container>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviews" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentMainInfo from "../components/apartment/ApartmentMainInfo.vue";
import ApartmentOwner from "../components/apartment/ApartmentOwner.vue";
import Reviews from "../components/reviews";

import { getApartsmentById } from "../services/apartments.service";

import reviews from "../components/reviews/reviews.json";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentMainInfo,
    ApartmentOwner,
    Reviews,
  },
  data() {
    return {
      apartment: null
    }
  },
  computed: {
    reviews() {
      return reviews;
    }
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartsmentById(id);
      this.apartment = data
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>

.apartment-page {
  padding-bottom: 55px;
  
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>