import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre: 'Victor',
    apellido: 'Gonzalez Rivas',
    count: 1
  },
  getters: {
    sizeApellido(state){
      return state.apellido.length
  }
  },
  mutations: {
    changeNombre(state, nombre){
      state.nombre = nombre
    },
    decrement(state){
      state.count--
    },
    increment(state){
      state.count++
    }
  },
  actions: {

    changeNombre({commit}, nombre){
      setTimeout(() =>{

        console.log("Actualizado en la base de datos")
        commit('changeNombre', nombre);
        
      }, 2000 );
    }
  },
  modules: {

  }
})
