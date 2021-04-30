<template>
  <div class="schedule">
    <h2>{{ centre.name }}</h2>
    <v-card>
      <h3>PRIMUL VACCIN</h3>
      <v-row>
        <v-col
          style="display: flex; align-items: center; justify-content: center"
          align="center"
        >
          <v-date-picker
            @change="calculateDate2()"
            v-model="date1"
            :min="auxDate1"
          ></v-date-picker>
        </v-col>
        <v-col
          style="display: flex; align-items: center; justify-content: center"
          align="center"
        >
          <v-time-picker
            v-model="time1"
            format="24hr"
            :allowed-minutes="allowedMinutes"
            min="8:00"
            max="20:00"
            scrollable
          ></v-time-picker>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col>
        <v-btn @click="enableRapel" v-if="isFirstButtonEnabled" dark>
          {{ buttonText }}
        </v-btn>
      </v-col>
    </v-row>
    <v-card class="Rapel" v-if="isRapelEnabled">
      <h3>RAPEL</h3>
      <v-row>
        <v-col
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
          align="center"
        >
          <h2 style="margin-bottom: 10px">DATA RAPEL</h2>
          <h3 class="secondDate">{{ date2 }}</h3>
        </v-col>
        <v-col
          style="display: flex; align-items: center; justify-content: center"
          align="center"
        >
          <v-time-picker
            v-model="time2"
            format="24hr"
            :allowed-minutes="allowedMinutes"
            min="8:00"
            max="20:00"
            scrollable
          ></v-time-picker>
        </v-col>
      </v-row>
    </v-card>
    <v-btn v-if="isSecondButtonEnabled" dark class="programare"
      >PROGRAMEAZA-TE</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      centre: "",
      date1: "",
      auxDate1: "",
      time1: "07:55",
      buttonText: "CONFIRMA",
      date2: "",
      time2: "07:55",
      isRapelEnabled: false,
    };
  },
  created() {
    this.centre = this.$route.params.centre;
    this.date1 = new Date().toISOString().substr(0, 10);
    this.auxDate1 = this.date1;
  },
  methods: {
    allowedMinutes: (v) => v % 10 === 0,

    calculateDate2() {
      let date2 = new Date(this.date1);

      if (this.centre.tipVaccin === "Moderna") {
        date2.setDate(date2.getDate() + 28);
      }
      if (this.centre.tipVaccin === "Pfizer") {
        date2.setDate(date2.getDate() + 21);
      }
      if (this.centre.tipVaccin === "AstraZeneca") {
        date2.setDate(date2.getDate() + 21);
      }
      if (date2.getMonth() < "9") {
        if (date2.getDate() < "10") {
          this.date2 =
            date2.getFullYear() +
            "-0" +
            (date2.getMonth() + 1) +
            "-0" +
            date2.getDate();
        } else {
          this.date2 =
            date2.getFullYear() +
            "-0" +
            (date2.getMonth() + 1) +
            "-" +
            date2.getDate();
        }
      } else {
        if (date2.getDate() < "10") {
          this.date2 =
            date2.getFullYear() +
            "-" +
            (date2.getMonth() + 1) +
            "-0" +
            date2.getDate();
        } else {
          this.date2 =
            date2.getFullYear() +
            "-" +
            (date2.getMonth() + 1) +
            "-" +
            date2.getDate();
        }
      }
    },

    enableRapel() {
      if (this.buttonText === "CONFIRMA") {
        this.buttonText = "REPROGRAMEAZA PRIMUL VACCIN";
      } else {
        this.buttonText = "CONFIRMA";
      }

      this.isRapelEnabled = !this.isRapelEnabled;
    },
  },
  computed: {
    isFirstButtonEnabled() {
      if (this.time1 === "07:55") {
        return false;
      } else {
        return true;
      }
    },
    isSecondButtonEnabled() {
      if (this.time2 === "07:55") {
      } else if (this.buttonText === "REPROGRAMEAZA PRIMUL VACCIN") {
        return true;
      }
    },
  },
};
</script>

<style scooped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.schedule {
  margin-top: 50px;
  font-family: "Montserrat", sans-serif;
}

.v-card {
  margin: 50px auto 20px auto;
  padding: 20px;
  width: 80%;
  height: auto;
}

.v-picker,
.v-picker__title,
.v-time-picker-title {
  color: #000000 !important;
}

.v-time-picker-title,
.v-date-picker-title {
  justify-content: center;
  align-items: center;
}

.programare {
  margin-bottom: 100px;
  margin-top: 50px;
}
</style>


