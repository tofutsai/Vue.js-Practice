<template>
  <div>
    <h1>User Overview</h1>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="goHome">Go Home</button>
    <button @click="goHome">Go home</button>
    <hr />
    <input type="text" v-model="number" />
    <p v-if="!verificationResult">請輸入正確格式</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "",
      verificationResult: true
    };
  },
  watch: {
    $route(to, from) {
      alert(to.params.teamId);
    },
    number(newValue){
      this.verificationResult = /^[a-z0-9_]{3,15}$/.test(newValue);
    }
  },
  created() {
    alert(this.$route.params.teamId);
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>