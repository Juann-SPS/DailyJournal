<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="txtColor">
      <b-button class="continuar" v-on:click="irParaDiario">Voltar</b-button>
      <p />
      <form @submit.prevent="onSubmit">
        <div class="center">
          <AddLista />
        </div>
      </form>
    </div>
    <div class="listas">
      <div v-for="lista in allLista" :key="lista.id" class="lista">
        {{ lista.title }}
        <div>
          <p>{{ lista.description }}</p>
        </div>
      </div>
    </div>
    <p />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddLista from "./AddLista";
export default {
  name: "FormDiario",
  components: { AddLista },
  props: {
    msg: String
  },
  data: function() {
    return {
      text: ""
    };
  },
  methods: {
    irParaDiario() {
      this.$router.push({ name: "diario" });
    },
    ...mapActions(["fetchLista"])
  },
  computed: mapGetters(["allLista"]),
  created() {
    this.fetchLista();
  }
};
</script>

<style scoped>
.continuar {
  background-color: darkslategray;
}
.txtColor {
  color: white;
}
.center {
  justify-content: center;
  display: flex;
}
.listas {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.listas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
