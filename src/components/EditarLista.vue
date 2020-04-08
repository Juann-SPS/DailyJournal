<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Title:</h2></div>
      <div><input type="text" v-model="lista_add.title" placeholder="Add title"></div>
      <div>
        <input type="checkbox" v-model="lista_add.completed" value="false">
        <label for="lista_add.completed">Está completa?</label>
      </div>

      <div><input type="submit" value="Submit"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditarLista",
  data() {
    return {
      id:this.$route.params.id,
      lista_add :{
        title: "",
        description: ""
      }
    }
  },computed: mapGetters(["listarById"]),
  created() {
    this.lista_add = this.listarById(this.id)
  },
  methods: {
    ...mapActions(["updateLista"]),
    onSubmit() {
      this.updateLista(this.lista_add);
      alert("Dados esditados com sucesso")
    }
  }
}
</script>

<style>

</style>