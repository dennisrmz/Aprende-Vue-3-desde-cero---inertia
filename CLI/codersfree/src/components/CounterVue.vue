<template>
    <h1>Hola desde el componente counter</h1>
    <button @click="disminuir">
        -
    </button>
    {{ contador }}
    <button @click="aumentar">
        +
    </button>
</template>

<script>

export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        disminuir(){
            this.contador--;
        },
        aumentar(){
            this.contador++;
        }
    },
}



</script>

<style scoped>
h1 {
    color: red;
}
</style>