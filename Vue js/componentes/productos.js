app.component('product-display', {
  template: 
  /*html*/ 
    `<div class="product-display" >
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="imagen" />
      </div>
      <div class="product-info">
        <h1>{{producto}}</h1>
        <p v-if="enStock>10">En stock</p>
        <p v-else-if="enStock<=10 && enStock>0">Ultimas unidades</p>
        <p v-else="enStock==0">Sin stock</p>
        <ul>
          <li v-for="detalle in detalles">{{detalle}}</li>
        </ul>
        <p>{{precio}}</p>
        <div v-for="(variante, index) in variantes" :key="variante.id" 
        @mouseover="updateVariante(index)"
        class="color-circle"
        :style= "{backgroundColor: variante.color}"
        
        ><!--{{variante.color}}--></div>
        <button class="button"
        :class="{ disabledButton: !enStock }" 
        v-on:click="addToCart"> 
        Add to Cart </button>
      </div>
    </div>
  </div>`,
  data(){
    return{
      
      producto: 'Medias',
      selectedVariante:0,
      // enStock: false,
      inventario: 100,
      precio: '$100',
      detalles: ['50% algodon',' 30% polyester', '20% lana'],
      variantes: [
        {id:1, color: 'blue',imagen: './assets/images/socks_blue.jpg', cantidad: 100},
        {id:2, color: 'green',imagen: './assets/images/socks_green.jpg', cantidad:0},
      ]
    }
  },
  methods:{
    addToCart(){
      this.$emit('add-to-cart',this.variantes[this.selectedVariante].id )
    },
    updateVariante(index){
        this.selectedVariante = index
    },
  },
  computed:{
      imagen(){
        return this.variantes[this.selectedVariante].imagen
      },
      enStock(){
        return this.variantes[this.selectedVariante].cantidad
      }
  } 
})