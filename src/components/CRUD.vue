
<template>
    <body>
        <div class="b-add">
            <router-link to="/create">
                <button>Add</button>
            </router-link>
        </div>
       <div class="container">
           <data-table>
               <thead>
               <tr>
                   <th>ID</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Email</th>
                   <th>Company</th>
                   <th>Salary</th>
                   <th>Actions</th>
               </tr>
               </thead>
               <tbody>
               <tr v-for="emp in employes">
                   <td>{{emp.id}}</td>
                   <td>{{emp.firstName}}</td>
                   <td>{{emp.lastName}}</td>
                   <td>{{emp.email}}</td>
                   <td>{{emp.company}}</td>
                   <td>{{emp.salary}}</td>
                   <td>
                       <router-link :to="{path:'edit/'+emp.id}"><p>Edit</p></router-link>
                       <button v-on:click="deleteEmployeById(emp.id)">Eliminar</button>
                   </td>
               </tr>
               </tbody>
           </data-table>
       </div>
    </body>
</template>

<script>
    import {EmployeApiService} from "@/apiService/employe-api.service";

    export default{
        data(){
            return{
                employes:null,
                employeService: new EmployeApiService(),
            }
        },
        methods:{
            getEmployees(){
                this.employeService.getAllEmployees().then(response=>{
                    this.employes=response.data;
                })
            },
           deleteEmployeById(id){
                this.employeService.deleteEmploye(id).then(response=>{
                    alert("Empleado "+id+" Eliminado");
                })
               window.location.reload();

            }
        },
        beforeMount() {
            this.getEmployees();
        }
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