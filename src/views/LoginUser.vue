<template>
  <div class = "login">
    <Login typeEntity='user'></Login>
  </div>
</template>

<script>
import Login from '../components/login/LoginDetails'

export default {
  name:'LoginDetails',
  components:{
    Login
  }
};
</script>

<style scoped>
</style>
