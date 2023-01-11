
export const moduleUser = {
    namespaced: true,
    state: {
      nombre: "Victor",
      apellido: "Gonzalez asRivas",
    },
    getters: {
      sizeApellido(state) {
        return state.apellido.length;
      },
    },
    mutations: {
      changeNombre(state, nombre) {
        state.nombre = nombre;
      },
    },
    actions: {
      changeNombre({ commit }, nombre) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit("changeNombre", nombre);
            resolve();
          }, 500);
        });
      },
    },
  };


//   export default moduleUser