const app = Vue.createApp({
  data() {
    return {
      message: "Hello vue",
      count: 5,
      textSize: 1,
      course: {
        id: 1,
        name: "Vue.js",
        price: "$50",
      },
    };
  },
  methods: {
    crecer(size){
        this.textSize += size
    }
  },
});

app.component("button-counter", {
  data() {
    return {
      count: 0,
    };
  },
  
  template: `
        <button @click="count++">
            Has hecho click {{ count }} veces
        </button>
    `,
});

app.component("detail-course", {
  data() {
    return {
      count: 0,
    };
  },
  props: ['course'],
  template: `
        <h1>{{course.name}}</h1>
        <p>El precio del curso es: {{ course.price }}</p>
        <button @click="$emit('crecerTexto', 0.2)">Incrementar tamaño</button>
        <slot></slot>
    `,
});
