<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentMainInfo :apartment="apartment" />
        <ApartmentOwner class="apartment-page__owner" :owner="apartment.owner" />
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentMainInfo from "../components/apartment/ApartmentMainInfo.vue";
import ApartmentOwner from "../components/apartment/ApartmentOwner.vue";
import apartments from "../components/apartment/apartments";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentMainInfo,
    ApartmentOwner,
  },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  mounted() {
    console.log(this.apartment);
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

  &__owner {
      min-width: 350px;
      margin-left: 30px;
  }
}
</style>