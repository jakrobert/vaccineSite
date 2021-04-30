<template>
  <div class="header">
    <div class="inner_header">
      <div class="logo">
        <img
          @click="goHome()"
          src="../../assets/Guvernul_Romaniei.png"
          alt="Guvernul Romaniei"
        />
      </div>
      <ul class="navigation">
        <router-link to="/user/1/home" class="link">Acasa</router-link>
        <router-link to="/user/profile" class="link">Profil</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      return this.$router.push("/user/home");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.header {
  width: 100%;
  height: 7vh;
  display: block;
  background-color: #b5e0ff;
  font-family: "Montserrat", sans-serif;
}

.inner_header {
  width: 70%;
  height: 100%;
  display: block;
  margin: 0 auto;
}

.inner_header .logo {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}

.inner_header .logo img {
  height: 80%;
  cursor: pointer;
}

.inner_header .navigation {
  float: right;
  height: 100%;
  display: flex;
}

.inner_header .navigation .link {
  padding: 15px;
  margin: auto 10px;
  display: block;
  text-decoration: none;
  color: black;
}

.inner_header .navigation .link:hover {
  transform: scale(1.2);
}
</style>