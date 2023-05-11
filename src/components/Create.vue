
<template>
    <body>
      <div>
          <h2>Add Employe</h2>
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
                  <input type="number" v-model="package" id="package" placeholder="Package" required>
              </div>
              <div>
                  <button type="submit">Add Employe</button>
              </div>
          </form>
      </div>
    </body>
</template>

<script>


    import {EmployeApiService} from "@/apiService/employe-api.service";

    export default {
        data(){
            return{
                firstName:'', lastName:'',email:'',company:'',salary:0,
                employeService:new EmployeApiService(),
            }
        },

        methods:{

            save(){
                const body = {"firstName": this.firstName, "lastName": this.lastName,
                    "email":this.email, "company":this.company, "salary":this.salary};
                this.employeService.createEmploye(body)
                    .then(() => {
                        alert("Usuario "+this.lastName+" Agregado");
                        this.$router.push('/crud');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }

</script>

<style scoped>
  body{
      background-color: skyblue;
  }
  input-text{
      background-color: indianred;
  }
</style>