<template>
<div class="center">
     <div class="center-schedule">
        <div class="cntr">
            <div class="schedule">
                <h3>Persoane programate: {{persoane}}</h3>
                <h3>Numar locuri libere: {{locuri}}</h3>
            </div>
            <div class="available">
                <h3>Locuri libere: </h3>
                <div class="time">
                    <h4>Ziua: {{zi}}</h4>
                    <h4>Ora: {{ora}}</h4>
                </div>
                <div class="time">
                    <h4>Ziua: {{zi}}</h4>
                    <h4>Ora: {{ora}}</h4>
                </div>
                <div class="time">
                    <h4>Ziua: {{zi}}</h4>
                    <h4>Ora: {{ora}}</h4>
                </div>               
            </div>       
      
        </div>
        <div class="modify-delete">
            <button type="submit" class="modify" @click="submitForm">Modifica locurile libere</button>
           
        </div>
    </div> 
    <div class="save">
        <button type="submit" class="save-btn">Salveaza</button>
    </div>      
  
</div>    
</template>

<script>

export default {
  name: 'UserInfo',
  data(){
      return{
        persoane:"600",
        locuri:"560 ",
        zi:"23/05",
        ora:"17:00"    
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

.center-schedule{
    display:flex;
    justify-content:space-between;
    margin:1.5em 0;
}

h3{
    margin-bottom:1em;
}
.cntr{
    width:70%;
    text-align:left;
    margin-left:4em;
    display:flex;
    
}

.schedule{
    width:50%;
}

.available{
   width:50%;
}

.time{
    border:1px solid;
    padding:1em;
    margin-top:1em;
}

.modify-delete{ 
    width:40%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;   
}

.modify{     
    width:40%;
    border-radius:0.8em;
    background-color: rgba(30, 30, 97, 0.781); 
    color:white;  
    padding: 1em;
    margin: 1em;
    border: none;
    cursor: pointer;
}
.save-btn{
    border-radius:0.8em;
    background-color: rgba(30, 30, 97, 0.781); 
    color:white;  
    padding: 1em;
    margin: 1em;
    border: none;
    cursor: pointer;
}

.modify:hover,.save-btn:hover{
    background-color: rgba(62, 62, 131, 0.781); 

}

@media only screen and (max-width: 600px) {

     .center-schedule{
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
    }
     .cntr{
        width:60%;
        flex-direction:column;
        margin-left:0;   
    }

    .schedule{
        width:100%;
    }

    .available{
        width:100%;
    }   

    .modify-delete{       
        flex-direction:column;        
    }
    .modify{     
        width:100%;   
    }
  
 
}

</style>
