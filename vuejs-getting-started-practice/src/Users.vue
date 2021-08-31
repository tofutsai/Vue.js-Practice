<template>
<div>
    <h1>Users Overview</h1>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="goHome">Go Home</button>
    <button @click="goUser10">GO User 10</button>
    <button @click="goUser12">Go User 12</button>
</div>
</template>

<script>
    export default{
        watch:{
            '$route' (to, form){
                //alert(to.params.teamId);
            }
        },
        created(){
            //alert(this.$route.params.teamId);
        },
        methods:{
            goHome(){
                this.$router.push('/');
            },
            goUser10(){
                this.$router.push('/users/10')
            },
            goUser12(){
                this.$router.push('/users/12');
            }
        }
    }
</script>
