<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div class="row">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81T15mxeFVL.png" alt="imagem de um diario">
        <div class="btnsDiario">
          <div><b-button class="success" v-on:click="mostrarFormDiario">Conte como foi seu dia</b-button></div>
          <div><b-button class="danger">Adicionar fotos do dia</b-button></div>
          <div><b-button class="primary">Listar dias</b-button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Diario',
  props: {
    msg: String
  },
  methods: {
    mostrarFormDiario() {
      this.$router.push({name : "formDiario"})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.success{
  background-color: #28a745;
  margin: 15px;
  height: 70px;
  width: 300px;
  font-size: 26px;
}
.danger{
  background-color: #dc3545;
  margin: 15px;
  height: 70px;
  width: 300px;
  font-size: 26px;
}
.primary{
  background-color: #007bff;
  margin: 15px;
  height: 70px;
  width: 180px;
  font-size: 26px;
}
.btnsDiario{
  margin-top: 7%;
}
</style>
