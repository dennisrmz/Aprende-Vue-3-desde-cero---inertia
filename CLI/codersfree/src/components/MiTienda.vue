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
        ...mapState(['nombre', 'apellido', 'count']),
        ...mapGetters(['sizeApellido']),

    },
    methods: {
        // ...mapMutations(['increment', 'decrement', 'changeNombre']),
        ...mapMutations(['increment', 'decrement']),

        ...mapActions(['changeNombre']),
        changeNombreComponent(){
            
            this.changeNombre(this.nombreComponent)

            // this.changeNombre(this.nombreComponent)
            this.nombreComponent = ""
        },
    }
}
</script>

<style>

</style>