<!-- DACA DAU REFRESH LA PAGINA NU MAI MERGE... -->
<template>
  <div class="section">
    <div class="filters">
      <div class="filter-criteria-item">
        <v-btn class="criterii"
          ><h4
            @click="sort('judet')"
            :class="[sortBy === 'judet' ? sortDirection : '']"
          >
            Judet
          </h4>
        </v-btn>
      </div>
      <div class="filter-criteria-item">
        <v-btn class="criterii"
          ><h4
            @click="sort('oras')"
            :class="[sortBy === 'oras' ? sortDirection : '']"
          >
            Oras
          </h4>
        </v-btn>
      </div>
      <div class="filter-criteria-item">
        <v-btn class="criterii"
          ><h4
            @click="sort('listaDeAsteptare')"
            :class="[sortBy === 'listaDeAsteptare' ? sortDirection : '']"
          >
            Lista de asteptare
          </h4>
        </v-btn>
      </div>
      <div class="filter-criteria-item">
        <v-btn class="criterii"
          ><h4
            @click="sort('tipVaccin')"
            :class="[sortBy === 'tipVaccin' ? sortDirection : '']"
          >
            Tip vaccin
          </h4>
        </v-btn>
      </div>
    </div>
    <div class="container" v-for="(centre, i) in sortedCentres" :key="i">
      <div class="box">
        <div class="info">
          <div class="name">
            <h2>{{ centre.name }}</h2>
          </div>
          <h4 class="locatie">
            {{ centre.adresa }}, {{ centre.oras }}, {{ centre.judet }}
          </h4>
        </div>
        <div class="infoVaccin">
          <h3 class="tipVaccin">{{ centre.tipVaccin }}</h3>
          <h4 class="nrPersoane">
            Lista asteptare: {{ centre.listaDeAsteptare }}
          </h4>
        </div>
        <div class="butoane">
          <v-btn @click="goToAppointmentsPage(centre)" v-if="isAccepted"
            >Programare</v-btn
          >
          <v-btn class="inscriere" v-else>Inscriere</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["centres"],
  data() {
    return {
      sortBy: "judet",
      sortDirection: "asc",
      isAccepted: true,
    };
  },
  methods: {
    sort: function (s) {
      if (s === this.sortBy) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      }
      this.sortBy = s;
    },
    goToAppointmentsPage(centre) {
      this.$router.push({
        name: "Appointments",
        params: {
          id: this.$route.params.id,
          centreID: centre.id,
          centre: centre,
        },
      });
    },
  },
  computed: {
    sortedCentres: function () {
      return this.centres.sort((p1, p2) => {
        let modifier = 1;
        if (this.sortDirection === "desc") modifier = -1;
        if (p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier;
        if (p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
        return 0;
      });
    },
  },
};
</script>

<style scoped>
.section {
  margin: 50px auto 0 auto;
  width: 80%;
}

/* FILTRE */

.filters {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
}

.filters .filter-criteria-item {
  margin: 0 20px;
}

.asc:after {
  content: "\25B2";
}

.desc:after {
  content: "\25BC";
}

/* LISTA CENTRE */
.container {
  background-color: #f3eddd;
  margin: 20px 0;
  padding: 20px 0;
  border-radius: 10px;
}

.box {
  display: grid;
  grid-template-columns: 40% 30% 30%;
}

.box .info {
  margin-left: 10px;
  align-items: center;
}

.info .locatie {
  margin: 10px 0;
}

.infoVaccin .nrPersoane {
  margin: 10px 0;
}

.butoane {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.butoane v-btn {
  width: 70%;
}
.butoane .inscriere {
  margin-bottom: 10px;
}

a.link {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
}

@media screen and (max-width: 1154px) {
  .filters .filter-criteria-item {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 1000px) {
  .box {
    display: grid;
    grid-template-columns: 33% 33% 34%;
    grid-template-rows: 50% 25% 25%;
  }
  .box .info {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .box .butoane {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .box .butoane .inscriere {
    margin: 0;
  }
}
@media screen and (max-width: 780px) {
  .filters {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
  }

  .filters .filter-criteria-item {
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    margin: 5px auto;
  }

  .filters .filter-criteria-item .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline;
    padding: 3px;
  }

  .filters .filter-criteria-item .criterii {
    width: 50vw;
    text-align: center;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}

@media screen and (max-width: 620px) {
  .container {
    height: auto;
  }

  .box {
    height: 100%;
    display: grid;
    grid-template-columns: 33% 33% 34%;
    grid-template-rows: 40% 40% 20%;
  }
  .box .info {
    height: auto;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: 0 auto 40px auto;
  }

  .box .infoVaccin {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: center;
  }

  .box .butoane {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-self: center;
  }
  .box .butoane .inscriere {
    margin: 0;
  }
}
</style>