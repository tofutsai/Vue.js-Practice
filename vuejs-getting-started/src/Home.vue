<template>
  <div>
    <h1>I'm home!</h1>
    <button @click="goUsers10">Go Users 10</button>
    <button @click="goUsers12">Go Users 12</button>
  </div>
</template>

<script>
export default {
    methods:{
        goUsers10(){
            this.$router.push('/users/10')
        },
        goUsers12(){
            this.$router.push('/users/12')
        }
    }
}
</script>