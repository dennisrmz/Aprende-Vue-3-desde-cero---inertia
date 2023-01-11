<template>
    <h1>Bienvenido a mi tienda</h1>
    <p>Mi nombre es {{ nombre }}</p>
    <p>Mi apellido es {{ apellido }}</p>
    <p>El apellido tiene {{ sizeApellido }} letras</p>
    <button @click="decrement()">
        -
    </button>
    {{ count }}
    <button @click="increment()">
        +
    </button>
    <br><br>
    <form @submit.prevent="changeNombreComponent()">
        <input type="text" v-model="nombreComponent">
        <button>Actualizar</button>
    </form>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    data(){
        return{
            nombreComponent: 'Victor'
        }
    },
    computed: {
        ...mapState('user',['nombre', 'apellido', 'count']),
        ...mapState('counter',['count']),
        // ...mapState({
        //     nombre: (state) => {
        //         return state.user.nombre
        //     }, 
        //     apellido: (state) => {
        //         return state.user.apellido
        //     }, 
        //     count: (state) => {
        //         return state.counter.count
        //     }
        // }),
        ...mapGetters('user', ['sizeApellido']),

    },
    methods: {
        // ...mapMutations(['increment', 'decrement', 'changeNombre']),
        ...mapMutations('counter', ['increment', 'decrement']),
        // ...mapMutations('user', ['changeNombre']),

        ...mapActions('user',['changeNombre', 'confirmationChangeNombre']),
        changeNombreComponent(){
            
            this.changeNombre(this.nombreComponent).then(() =>{
                this.nombreComponent = ""

            })

            // this.changeNombre(this.nombreComponent)
            
        },
    }
}
</script>

<style>

</style>