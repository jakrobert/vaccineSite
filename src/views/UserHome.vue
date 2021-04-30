<template>
  <div class="userHome">
    <UserHomeHeader />
    <UserHomeCentresInfo :centres="centres" />
  </div>
</template>

<script>
import UserHomeHeader from "../components/userHome/UserHomeHeader.vue";
import UserHomeCentresInfo from "../components/userHome/UserHomeCentresInfo.vue";
export default {
  data() {
    return {
      centres: [
        {
          id: "1",
          name: "Spitalul Floresca",
          listaDeAsteptare: 321,
          adresa: "Strada Trandafirilor, nr. 12",
          judet: "Olt",
          oras: "Slatina",
          tipVaccin: "Pfizer",
        },
        {
          id: "2",
          name: "Spitalul Judetean De Urgente",
          listaDeAsteptare: 1231,
          adresa: "Strada Buruienilor, nr. 21",
          judet: "Dolj",
          oras: "Craiova",
          tipVaccin: "Moderna",
        },
        {
          id: "3",
          name: "Spitalul Floresca",
          listaDeAsteptare: 674,
          adresa: "Strada Gandacilor, nr. 541",
          judet: "Vrancea",
          oras: "Focsani",
          tipVaccin: "AstraZeneca",
        },
      ],
    };
  },
  components: {
    UserHomeHeader,
    UserHomeCentresInfo,
  },
};
</script>

<style scoped>
</style>