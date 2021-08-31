<template>
<div>
    <h1>I'm home!</h1>
    <button @click="goUser10">Go User 10</button>
    <button @click="goUser12">Go User 12</button>
</div>
   
</template>
<script>
    export default{
        methods:{
            goUser10(){
                this.$router.push('/users/10');
            },
            goUser12(){
                this.$router.push('/users/12');
            }
        }
    }
</script>
