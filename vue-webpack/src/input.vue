<template>
  <div>
    <input type="text" :value="msg" @input="changeMessage" />
    <!-- <input type="text" v-bind:value="msg" v-on:input="changeMessage"> -->
    <input type="text" :value="som" @input="changeSomething">
    <p>{{ something }}</p>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: ["msg", "som"],
  data() {
    return {
      message: "",
      something: ""
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit("messageChanged", this.message);
      
    },
    changeSomething(event){
      this.something = event.target.value;
      this.$emit('somethingChanged', this.something);
    }
  },
};
</script>