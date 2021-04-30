<template>
    <div>
      <div class = "square">
        <div>
          <v-text-field
            label="Email"
            v-model="entity.email"
            type = "Email"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            label="Password"
            type="Password"
            v-model="entity.password"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
        </div>
      </div>
      <div class = "button">
        <v-btn @click="login(typeEntity)" type="submit">Login</v-btn>
        <v-btn @click="whereTo(typeEntity)" class = "register">Register</v-btn>
      </div>
      <router-view/>
    </div>
</template>

<script>
import CentreUser from '../../views/CentreUser';

export default {
  name: 'LoginDetails',
  props: ['typeEntity'],
  components: {
    CentreUser,
  },
  data: () => ({
      entity: {
        email: "",
        password: ""
      },
      rules: [
        value => !!value || 'Required.'
      ],
    }),
  methods: {
    whereTo: function (type) {
      if (type === 'centre') {
        this.$router.push('/centre/registration');
      } else {
        this.$router.push('/user/registration');
      }
    },

    login: function (type) {
      if (this.entity.email && this.entity.password) {
        let copy = {...this.entity};
        var that = this;

        if (type === 'centre') {
          this.$http.get("http://localhost:4000/centers/email/" + copy.email, copy).then((data) => { 
            console.log(data.body);
            if (data && data.body.length !== 0 && data.body[0].password === copy.password) {
              console.log('am intrat');
              that.$router.push('/centre/' + data.body[0]._id + '/home');
            } else {
              console.log("Not ok!!!");
            }
          });
          
        } else {
          this.$http.get("http://localhost:4000/users/email/" + copy.email, copy).then((data) => {  
            if (data && data.body.length !== 0 && data.body[0].password === copy.password) {
              console.log('am intrat');
              that.$router.push('/user/' + data.body[0]._id + '/home');
            } else {
              console.log("Not ok!!!");
            }
          });
        }
      }
    },
  },
}
</script>

<style scoped>
.square {
  width: 20em;
  height: 10em;
  margin-top: 10%;
  margin-left: 10%;
}

.button {
  display: flex;
  justify-content: space-evenly;
  margin-left: -10%;
}

</style>