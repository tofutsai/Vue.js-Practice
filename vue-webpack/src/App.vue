<template>
  <div id="app">
    <app-message></app-message>
    <h1>MSG:{{ msg }}</h1>
    <h2>{{ hello }}</h2>
    <h2>{{ hello + "2017" }}</h2>
    <input type="text" v-model="hello" />
    <input type="checkbox" v-model="toggle" />{{ toggle }}
    <button v-on:click="changehello">Change hello</button>
    <input type="text" v-on:input="msg = $event.target.value" />
    <p v-bind:class="msg">Class:{{ msg }}</p>
    <button @click="increment">Increment</button>
    <p>Counter:{{ counters }}</p>
    <p>Click:{{ click }}</p>
    <button v-on:click="show = !show">Show / Hide</button>
    <p v-if="show">I'm part-time visible!</p>
    <p v-else>Am I visible?</p>
    <p v-show="show">Hurray, I'm here</p>
    <hr />
    <ul>
      <li v-for="(person, index) in persons" :key="person.id">
        {{ person.name }}-{{ index }}
      </li>
    </ul>
    <p>{{ hello | uppercase }}</p>
    <app-user></app-user>
    <app-user></app-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      hello: "Hello Vue 2.0!",
      toggle: false,
      counter: 0,
      click: 0,
      show: true,
      persons: [
        { name: "Max", age: 27 },
        { name: "Chris", age: 30 },
        { name: "Nora", age: 25 },
      ],
    };
  },
  methods: {
    changehello() {
      this.hello = "Nice to see you";
    },
    increment() {
      this.click++;
      // this.counter = this.click * 2;
    },
  },
  computed: {
    counters() {
      return this.click * 2;
    },
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase();
    },
  },
  components: {
    "app-user": {
      data() {
        return {
          users: [
            { name: "Max", age: 27 },
            { name: "Chris", age: 30 },
            { name: "Nora", age: 25 },
          ],
        };
      },
      template:
        `<div><div class="user" v-for="user in users" :key="user.id">
        <p>Username:{{ user.name }}-age:{{ user.age }}</p></div></div>`,
    },
  },
};
</script>

<style lang="scss">
.red {
  background-color: red;
  color: white;
}
.blue {
  background-color: blue;
  color: white;
}
.user {
  border: 1px solid #ccc;
  background-color: gray;
  padding: 10px;
}
</style>
