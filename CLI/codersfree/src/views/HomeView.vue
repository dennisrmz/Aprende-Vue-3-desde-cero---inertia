<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MiTienda></MiTienda>
  </div>
</template>

<script>
// @ is an alias to /src
import MiTienda from '@/components/MiTienda.vue'

export default {
  name: 'HomeView',
  components: {
    MiTienda
  }
}
</script>
