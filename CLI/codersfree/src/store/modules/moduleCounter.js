export const moduleCounter = {
    namespaced: true,
    state: {
      count: 1,
    },
    getters: {
  
    },
    mutations: {
      decrement(state) {
        state.count--;
      },
      increment(state) {
        state.count++;
      },
    },
    actions: {},
    
  };

//   export default moduleCounter