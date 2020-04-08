<template>
  <div id="app">
    <Header />
    <b-container>
    <router-view />
    </b-container>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {

  name: 'App',
  components: {Header,
  Footer
  },
}
</script>

<style>
#app{
  background-color: darkblue;
}

h1 {
  text-align: center;
  padding: 24px;
}
</style>
