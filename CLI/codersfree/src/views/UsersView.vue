<template>
  
    <div v-if="$route.params.userId">
        <h1>Aqui podras ver el detalle de un usuario</h1>
    </div>
    <div v-else>
        <h1>Aqui podras ver la lista de usuarios

        </h1>
    </div>

    <nav>
        <router-link :to="'/users/' + $route.params.userId">Index</router-link> |
        <router-link :to="'/users/' + $route.params.userId + '/profile'">Perfil</router-link> |
        <router-link :to="'/users/' + $route.params.userId + '/courses'">Cursos</router-link> 
      </nav>
      <router-view/>
</template>
  
<script>
export default {

}
</script>
  
<style>

</style>