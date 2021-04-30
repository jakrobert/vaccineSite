<template>
  <div class="RegisterUser" data-app>
    <h1>Inregistrare Centru</h1>
    <div class="box">
      <p>Denumire Centru</p>
      <v-text-field
        v-model="centru.name"
        :rules="[rules.required]"
        label="Name"
      ></v-text-field>
      <p>Locatie</p>
      <v-text-field
        v-model="centru.oras"
        :rules="[rules.required]"
        label="Oras"
      ></v-text-field>
      <v-text-field
        v-model="centru.judet"
        :rules="[rules.required]"
        label="Judet"
      ></v-text-field>
      <v-text-field
        v-model="centru.strada"
        :rules="[rules.required]"
        label="Strada"
      ></v-text-field>
      <p>Tip Vaccin</p>
      <v-select
        v-model="centru.vaccineType"
        :items="vaccineTypeItems"
        :rules="[rules.required]"
        label="Tip Vaccin"
      ></v-select>
      <p>Numar de doze</p>
      <v-text-field
        v-model="centru.numberOfVaccines"
        :rules="[rules.required]"
        label="Numar de doze"
      ></v-text-field>

      <p>Email</p>
      <v-text-field
        v-model="centru.email"
        :rules="[rules.required, rules.email]"
        label="Email"
      ></v-text-field>

      <p>Parola</p>
      <v-text-field
        v-model="centru.password"
        :rules="[rules.required]"
        :type="show1 ? 'text' : 'password'"
        label="Password"
      ></v-text-field>
    </div>

    <v-btn class="buton-inscriere" @click="salvareDate()">Inscrie-te</v-btn>
  </div>
</template>

<script>
export default {
  name: "UserRegister",
  data() {
    return {
      show1: false,
      select: null,
      vaccineTypeItems: ["Pfizer", "AstraZeneca", "Moderna"],
      centru: {
        name: "",
        oras: "",
        judet: "",
        strada: "",
        vaccineType:"",
        numberOfVaccines: "",
        email: "",
        password: "",
      },


      rules: {
        required: (value) => !!value || "Camp necesar",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },

  methods: {
    salvareDate() {
      
      if (
        this.centru.name &&
        this.centru.oras &&
        this.centru.judet &&
        this.centru.strada &&
        this.centru.vaccineType &&
        this.centru.numberOfVaccines &&
        this.centru.email &&
        this.centru.password
      ) {
        let body = {...this.centru};
        console.log(body);
        this.$http.post("http://localhost:4000/centers", body).then((data) => {
          console.log(data);
        })

        this.$router.push("/login/centre");
      }
    },
  },
};
</script>

<style scoped>
.RegisterUser {
  background-color: lightblue;
  height: 100em;
}

.buton-inscriere {
  margin-top: 10em;
}
.box {
  display: flex;
  width: 50em;
  height: fit-content;
  border-radius: 1%;
  display: block;
  margin: auto;
}


p {
  font-size: 1em;
  text-align: left;
  margin-top: 3em;
}

</style>