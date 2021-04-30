<template>
<div class="center-info">
      <div class="profile-info">
        <div class="form">
            <div class="name">
                <div class="part">
                    <h3>Denumire centru</h3>
                    <input type="text" v-model="denumire" required>                 
                </div>
                        
            </div>
            <div class="location">
                <div class="part">
                    <h3>Locatie centru</h3>
                    <input type="text" v-model="locatie" required>
                </div>
            </div>
            <div class="vaccine">
                <div class="part">
                    <h3>Tip vaccin</h3>
                    <input type="text" v-model="vaccin" required>
                </div>
            </div>
           
        </div>
        <div class="modify-delete">
            <button type="submit" class="modify" @click="submitForm">Modifica informatii</button>
            <button type="submit" class="delete">Sterge profil</button>
        </div>
    </div>
    <hr>       
  
</div>    
</template>

<script>

export default {
  name: 'UserInfo',
  data(){
      return{
        denumire:" ",
        vaccin:" ",
        loactie:" "       
    }
  },
  methods:{
    submitForm() {
 
    }

  }

}
</script>

<style scoped>
*{
    margin:0;
    padding:0;      
}

.profile-info{
    display:flex;
    justify-content:space-between;
    margin:1.5em 0;
}
.form{
    width:70%;
    text-align:left;
    margin-left:4em;
}

.name,.location,.vaccine{
    display:flex;
    justify-content:space-between;
    align-items:center;

}
.part{
   flex-grow:1; 
}

.modify-delete{ 
    width:40%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;   
}

.modify,.delete,.save-btn{     
    width:40%;
    border-radius:0.8em;
    background-color: rgba(30, 30, 97, 0.781); 
    color:white;  
    padding: 1em;
    margin: 1em;
    border: none;
    cursor: pointer;
}

.delete:hover{
    background-color: rgba(62, 62, 131, 0.781); 
}
.modify:hover{
    background-color: rgba(62, 62, 131, 0.781); 

}

input[type=text] {
    width:100%;
    margin-top:1em;
    margin-bottom:1em; 
    padding:1em 0 1em 0;
    border: none;
    background: #f1f1f1;
    border-radius:0.8em;
}

input[type=text]:focus{
  background-color: #ddd;
  outline: none;
}



@media only screen and (max-width: 600px) {

     .profile-info{
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
    }
     .form{
        width:60%;
        flex-direction:column;
        margin-left:0;   
    }

    .name,.location,.vaccine{
        display:flex;
        flex-direction:column;
    }

    .modify-delete{       
        flex-direction:column;        
    }
    .modify,.delete{     
        width:100%;   
    }
    .part{
        flex-grow:0;
        width:100%;
    }
 
}

</style>
