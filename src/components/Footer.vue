<template>
  <div id="header">
     <b-navbar toggleable="lg" type="dark" variant="dark">
       <b-navbar-brand :to="{ name: 'home' }" > @COPYRIGHT Juann Suassuna</b-navbar-brand>
       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>