<template>
  <div id="app">
   <app-docs></app-docs>
  </div>
</template>

<script>
import docs from './docs.vue';
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    'app-docs':docs,
  }
}
</script>

<style>

</style>
