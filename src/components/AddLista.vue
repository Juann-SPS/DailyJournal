<template>
  <div>
    <div>
      <form @submit.prevent="onSubmit">
        <div><h2>Titulo para o dia:</h2></div>
        <div><b-form-textarea type="text" v-model="lista_add.title" placeholder="Adicione title"></b-form-textarea></div>
        <div><h2>Descrição do dia:</h2></div>
        <h3>Nome:</h3>
        <div><b-form-textarea type="text" v-model="lista_add.nome" placeholder="Coloque nome"></b-form-textarea></div>
        <h3>Local:</h3>
        <div><b-form-textarea type="text" v-model="lista_add.local" placeholder="Cidade, Estado, País"></b-form-textarea></div>
        <h3>Parte Boa do dia:</h3>
        <div><b-form-textarea type="text" v-model="lista_add.parteFeliz" placeholder="Exclame sua felicidade!"></b-form-textarea></div>
        <h3>Parte Ruim do dia:</h3>
        <div><b-form-textarea type="text" v-model="lista_add.parteRuim" placeholder="Reclame do seu dia!"></b-form-textarea></div>
        <h3>Data:</h3>
        <div><input type="date" v-model="lista_add.data"></div>
        <p/>
        <div><input type="submit" value="Submit"></div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddLista",
  data() {
    return {
      lista_add :{
        title:"",
        nome: "",
        local: "",
        data: "",
        parteFeliz: "",
        parteRuim: ""
      }
    };
  },
  methods: {
    ...mapActions(["AddLista"]),
    onSubmit() {
      this.AddLista(this.lista_add);
    }
  }
};
</script>

<style>
form {
  display: block;
}
input[type="text"],input[type="textarea"] {
  width: 100%;
  flex: 10;
  padding: 10px;
  border: 1px solid #1BBC9B;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
</style>
