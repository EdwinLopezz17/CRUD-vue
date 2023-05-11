
<template>
    <body>
    <div>
        <h2>Edit Employe</h2>
        <form v-on:submit="save()">
            <div>
                <input type="text" v-model="firstName" id="firstName" placeholder="First Name" required>
            </div>
            <div>
                <input type="text" v-model="lastName" id="lasttName" placeholder="Last Name" required>
            </div>
            <div>
                <input type="email" v-model="email" id="email" placeholder="Email" required>
            </div>
            <div>
                <input type="text" v-model="company" id="company" placeholder="Company" required>
            </div>
            <div>
                <input type="number" v-model="salary" id="salary" placeholder="Salary" required>
            </div>
            <div>
                <button type="submit">Save Employe</button>
            </div>
        </form>
    </div>
    </body>
</template>

<script>


import {EmployeApiService} from "@/apiService/employe-api.service";
import {useRoute} from "vue-router";

export default {
    data(){
        return{
            id:0, firstName:'', lastName:'',email:'',company:'',salary:'',
            employeService:new EmployeApiService(),
        }
    },

    methods:{

        save(){
            const body = {"firstName": this.firstName, "lastName": this.lastName,
                "email":this.email, "company":this.company, "salary":this.salary};
            this.employeService.updateEmploye(this.id, body)
                .then(() => {
                    alert("Usuario "+this.lastName+" Modificado");
                    this.$router.push('/crud');
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getEmployeData(id){
            this.employeService.getEmployeById(id).then(response=>{
                console.log(response);
                this.lastName=response.data['lastName'];
                this.firstName=response.data['firstName'];
                this.email=response.data['email'];
                this.company=response.data['company'];
                this.salary=response.data['salary'];
            })
        }
    },
    mounted() {
        const route = useRoute();
        this.id=route.params.id;
        this.getEmployeData(this.id);
    }
}

</script>

<style scoped>

</style>