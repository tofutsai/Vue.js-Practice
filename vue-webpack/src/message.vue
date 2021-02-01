<template>
  <div>
    <h1>{{ message }}</h1>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
    <app-input :som="something" @somethingChanged="something=$event"></app-input>
  </div>
</template>

<script>
import Input from "./input.vue";
export default {
  data() {
    return {
      message: "This is a great Message!",
      something:"This is something"
    };
  },
  components: {
    "app-input": Input,
  },
};
</script>