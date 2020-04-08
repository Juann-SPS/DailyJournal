<template>
    <div>
    
        <h1>DETALHAR Lista</h1>
        <router-link
           tag="a"
           :to="{ name: 'ok' }"
       >
        Listar
      </router-link>
      <div class="detail">
        <div><h3>title :</h3> {{ listarById(id).title }}</div>
        <div>
            <span v-if="listarById(id).completed">completed : <i class="fas fa-check"></i></span>  
            <span v-else>completed : <i class="fas fa-times"></i></span> 
        </div>

        <button @click="editar">Editar lista</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
    name: "Detalhar",
    data: function(){
        return{ 
            id : this.$route.params.id,}
    },
    computed: mapGetters(["listarById"]),
    methods: {
        editar() {
        this.$router.push({ name: 'edit-lista' , params: { id: this.id } });
        }
    }

}
</script>

<style>
button{
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
.detail{
    padding: 24px;
}
i {
  cursor: pointer;
  color: #000;
  position: inherit;
}

</style>