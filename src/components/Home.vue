<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
        <div>
          <div class="alignCenter txtColor">
            <h1>Bem vindo ao Daily Jouney</h1>
            <h3>Esse site é um modelo de ser capaz de se expressar no dia a dia. </h3> 
            <h3> Seu dia foi bom? Seu dia foi ruim?</h3>
            <h3> Para voce sua opiniao é o que mais importa, entao assim é a forma mais tranquila e segura de poder desde escrachar alguem do trabalho ou a fantasiar de como seriam seus melhores dias.</h3>
          </div>
        </div>
        <p>
        <div class="card">
          <div class="alignCenter txtColor">
            <h2 class>
              Quer se abrir agora ?
            </h2>
            <b-button class="continuar" v-on:click="mostrarDiario">Começar agora</b-button>
            <img src="https://live.mrf.io/statics/i/ps/amenteemaravilhosa.com.br/wp-content/uploads/2016/08/sonhos-realizados.jpg" alt="imagem de um sonho" class="contentA">
          </div>
        </div>
    </div>
    <p/>
  </div>
</template>

<script>
export default {
  name: 'Diario',
  props: {
    msg: String
  },
  methods: {
    mostrarDiario() {
      this.$router.push({name : "diario"})
    },
  }
}
</script>


<style scoped>
.alignCenter{
  text-align: center;
}
.continuar{
background-color: darkblue;
}
.card{
  display: block;
  background-color: darkslategray;
  width: 500px;
}
.contentA{
  width: auto;
  height: auto;
}
.txtColor{
  color: white;
}
.hello{
  display: flex;
  justify-content: center;
}
</style>