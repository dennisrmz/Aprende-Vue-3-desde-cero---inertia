<template>
  
    <div v-if="userId">
        <h1>Aqui podras ver el detalle del usuario con id {{ userId }}</h1>
    </div>
    <div v-else>
        <h1>Aqui podras ver la lista de usuarios

        </h1>
    </div>

    <nav>
        <router-link :to="{name: 'UserIndex', params: {userId: userId }}">Index</router-link> |
        <router-link :to="{name: 'UserProfile', params: {userId: userId }}">Perfil</router-link> |
        <router-link :to="{name: 'UserCourses', params: {userId: userId }}">Cursos</router-link> 
      </nav>
      <router-view/>
</template>
  
<script>
export default {
    props: ['userId'],
}
</script>
  
<style>

</style>