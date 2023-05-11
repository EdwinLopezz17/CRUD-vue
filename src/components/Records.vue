
<template>
    <body>

      <div class="container">
        <data-table>
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Maraton Center</th>
                <th>Ranking</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="part in records">
                <td>{{part.id}}</td>
                <td>{{part.firstName}}</td>
                <td>{{part.lastName}}</td>
                <td>{{getName(part.centerId)}}</td>
                <td>{{part.ranking}}</td>
                <td>{{part.recordTime}}</td>
            </tr>
            </tbody>
        </data-table>
      </div>
    </body>
</template>

<script>

import {ParticipantsApiService} from "@/apiService/participants-api.service";
import {CentersApiService} from "@/apiService/centers-api.service";

export default {
    name:'records',
    data(){
        return{
            participants:[],
            centerService: new CentersApiService(),
            participantService: new ParticipantsApiService(),
            centers:[],
            records:[],
        }
    },

    methods:{
        getParticipants(){
            this.participantService.getAllParticipants().then((response)=>{
                this.participants = response.data;
            })
            console.log(this.participants.length);
        },
        getCenters(){
            this.centerService.getAllCenters().then(response=>{
                this.centers=response.data;
            })
        },
        getName(id){
            for (let i = 0; i < this.centers.length; i++) {
                if(this.centers[i].id === id){
                    return this.centers[i].name;
                }
            }
        },
        updateRecords(){
            for (let i=0; i<this.centers.length; i++){
                let cId=this.centers[i].id;
                let rank=1000;
                for (let j=0; j<this.participants.length; j++){
                    if(this.participants[j].centerId === cId){
                        if(this.participants[j].ranking < rank){
                            this.records[i] = this.participants[j];
                            rank = this.participants[j].ranking;
                        }
                    }
                }
            }
        },
        orderRecords() {
            const n = this.records.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (this.records[j].ranking > this.records[j + 1].ranking) {
                        const temp = this.records[j];
                        this.records[j] = this.records[j + 1];
                        this.records[j + 1] = temp;
                    }
                }
            }
        },
    },

    beforeMount() {
        this.getParticipants();
        this.getCenters();
    },

    mounted() {
        setTimeout(() => {
            this.updateRecords();
            this.orderRecords();
        }, 100);


    },

}

</script>



<style scoped>
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:sans-serif;

  }
  body{
      display:flex;
      justify-content: center;
      background-color: black;

  }

  .container{
      border: 2px solid white;
      height: min-content;
      margin-top:30px;
  }
  data-table{
      color:white;
      font-size:1.2rem;
      table-layout:fixed;
      border-collapse:collapse;
  }
  thead{
      background: indianred;
  }
  th{
      padding:10px 20px;
      font-weight:bold;
      border: solid 1px white;
  }
  thead th:hover{
      background-color: rgb(50 50 50);
  }
  td{
      padding:15px;
      border: solid 1px white;
  }
  tbody tr{
      cursor:pointer;
      text-align:center;
  }
  tbody tr:hover{
      background-color: rgb(50 50 50);
  }

</style>

