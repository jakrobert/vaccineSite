<template>
  <div class="RegisterUser" data-app>
    <h1>Inregistrare Utilizator</h1>
    <div class="box">
      <p>Nume</p>
      <v-text-field
        v-model="user.firstName"
        :rules="[rules.required]"
        label="Name"
      ></v-text-field>
      <p>Prenume</p>
      <v-text-field
        v-model="user.lastName"
        :rules="[rules.required]"
        label="Prenume"
      ></v-text-field>
      <p>Tip Cetatean</p>
      <v-select
        v-model="user.citizenType"
        :items="citizenTypeItems"
        :rules="[rules.required]"
        label="Tip Cetatean"
      ></v-select>
      <p>CNP</p>
      <v-text-field
        v-model="user.cnp"
        :rules="[rules.required]"
        label="CNP"
      ></v-text-field>
      <p>Numar de telefon</p>
      <v-text-field
        v-model="user.phoneNumber"
        :rules="[rules.required, rules.phone]"
        label="Numar de telefon"
      ></v-text-field>
      <p>Adresa</p>
      <v-text-field
        v-model="user.address"
        :rules="[rules.required]"
        label="Adresa"
      ></v-text-field>

      <p>Email</p>
      <v-text-field
        v-model="user.email"
        :rules="[rules.required, rules.email]"
        label="Email"
      ></v-text-field>

      <p>Parola</p>
      <v-text-field
        v-model="user.password"
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
      citizenTypeItems: [
          "Categoria a II-a A / adulți cu vârsta peste 65 de ani",
          "Categoria a III-a A / populația generală / lucrătorii din industria extractivă",
          "Categoria a III-a A / populația generală / lucrătorii din industria prelucrătoare",
        ],
      user: {
        firstName: "",
        lastName: "",
        cnp: "",
        address: "",
        phoneNumber: "",
        citizenType: "",
        email: "",
        password: "",
      },

     
      rules: {
        required: (value) => !!value || "Camp necesar",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        phone: (value) => {
          if (
            !(
              value.length == 10 &&
              value.split("")[0] == 0 &&
              value.split("")[1] == 7
            )
          )
            return "Telefon invalid";
        },
      },
    };
  },

  methods: {
    goToUserRegistration() {
      this.$router.push("/user/registration");
    },
    goToUser() {
      this.$router.push("/");
    },

    salvareDate() {
      if (
        this.user.firstName &&
        this.user.lastName &&
        this.user.citizenType &&
        this.user.address &&
        this.user.cnp &&
        this.user.phoneNumber &&
        this.user.email &&
        this.user.password
      ) {

        let body = {...this.user};
        console.log(body);
        this.$http.post("http://localhost:4000/users", body).then((data) => {
          console.log(data);
        })
       this.$router.push("/login/user");
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
