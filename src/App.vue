<script setup>

</script>

<template>
    <main>
        <header>
            <p>Technogym Indoor Marathon</p>
            <nav>
                <router-link to="/home">
                    <button>Home</button>
                </router-link>
                <router-link to="/records">
                    <button>Records</button>
                </router-link>
                <router-link to="/crud">
                    <button>CRUD</button>
                </router-link>
            </nav>
        </header>
        <body>
            <router-view></router-view>
        </body>

    </main>


</template>

<style scoped>
    header{
        background:cornflowerblue;
        width:100vw;
        padding:20px;
        display:flex;
        flex-direction: row;
    }
    header p{
        font-weight: bold;
        color:white;
        width:50%;
    }
    header nav{
    width:60%;
    margin: auto 100px;
    display:flex;
    justify-content: end;
    }
    header nav button{
    margin:10px;
    }

</style>