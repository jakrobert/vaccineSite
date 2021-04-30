<template>
  <div>
    <h1 class="title"> Welcome! </h1>
    <h2 class="msg"> I'm a ... </h2>
    <div id="nav">
      <v-btn to='/login/centre'> Center </v-btn>
      <v-btn to='/login/user'> User </v-btn>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {

  data() {
    return {
      type: String,
    }
  },
};
</script>

<style scoped>

.title {
  margin-top: 150px;
  color: #42b983;
  display: flex;
  justify-content: center;
}

.msg {
  margin-top: 50px;
  margin-bottom: 50px;
  color: black;
  display: flex;
  justify-content: center;

}
</style>