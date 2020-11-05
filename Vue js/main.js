const app = Vue.createApp({
  data(){
    return{
      carrito:[],
    }
  },
  methods:{
    updateCart(id){
      this.carrito.push(id)
    }
  },
})
