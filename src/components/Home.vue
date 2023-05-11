
<template>
    <div class="participants">
        <div v-for="part in participants" class="participant">
            <img :src="part.photoUrl">
            <p>id: {{part.id}}</p>
            <p>Name: {{part.firstName}}</p>
            <p>Last Name: {{part.lastName}}</p>
            <p>Center id: {{part.centerId}}</p>
            <p>Ranking: {{part.ranking}}</p>
            <p>{{getName(part.id)}}</p>
            <p>Record Time: {{part.recordTime}}</p>
        </div>

        <div v-for="part in participants" >
            <div v-if="part.ranking === 1" class="participant">
                <h2>The Winer</h2>
                <img :src="part.photoUrl">
                <p>id: {{part.id}}</p>
                <p>Name: {{part.firstName}}</p>
                <p>Last Name: {{part.lastName}}</p>
                <p>Center id: {{part.centerId}}</p>
                <p>{{getName(part.id)}}</p>
                <p>Ranking: {{part.ranking}}</p>
                <p>Record Time: {{part.recordTime}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {ParticipantsApiService} from "@/apiService/participants-api.service";
import {CentersApiService} from "@/apiService/centers-api.service";
export default {
    name: "participants",
    data(){
        return{

            participants :[],
            participantsService : new ParticipantsApiService(),
            centers:[],
            centersService: new CentersApiService(),
        }
    },


    methods:{
        getParticipants(){
            this.participantsService.getAllParticipants().then((response)=>{
                this.participants = response.data;
            })
        },

        deleteParticipant(id){
            this.participantsService.deleteParticipant(id).then((response)=>{
                if(response.status === 200){
                    alert("user deleted")
                    this.getParticipants();
                }
                else(
                    alert("error deleting user")
                )
            })
        },


        getCenters(){
            this.centersService.getAllCenters().then(response=>{
                this.centers=response.data;
            })
        },
        getCenterNameById(id){
            return this.centersService.getCenterNameById(id);
        },
        getCenterById(id){
            return this.centersService.getCenterById(id).then(response=>{
                response.name;
            });
        },

        getName(id){
            for (let i = 0; i < this.centers.length; i++) {
               if(this.centers[i].id === id){
                   return this.centers[i].name;
               }
            }
        }
    },

    beforeMount() {
        this.getParticipants();
        this.getCenters();
    }

}
</script>

<style scoped>
    *{
        margin:0px;
        padding:0px;
    }
    img{
        width: 100px;
        height:100px;
        border-radius: 50px;
    }
    .participants{
        display: flex;
        flex-wrap: wrap;
    }
    .participant{
        border-radius: 5px;
        margin:10px;
        padding:20px;
        border: 1px solid white;
        color:red;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .participant:hover{
        background-color: rgb(50 50 50);
    }
</style>