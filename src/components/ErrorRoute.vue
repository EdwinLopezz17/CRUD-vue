
<template>
  <h1>page-not-found</h1>
  <h2>La ruta "{{getThisRoute()}}" no fue encontrada</h2>
    <router-link to="/home">
        <button >Return to Home</button>
    </router-link>
</template>

<script>
    export default {

        methods:{
            getThisRoute(){
                return this.$route.path;
            }
        },

        mounted() {

        }
    }
</script>


<style scoped>
button{
    background:red;
    font-size: 1.5rem;
    border-radius: 10px;
    border: 1px solid white;
    color: black;
}
button:hover{
    background-color:skyblue;
}
</style>