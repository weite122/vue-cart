<template>
    <div id="app">
        <ul>
            <li v-for="(good, index) in goods" :key="good.id">{{good.text}}
                <span>{{good.text}}</span>
                <span>${{good.price}}</span>
                <button @click="addCart(index)">添加购物车</button>
            </li>


        </ul>
        <cart :name="name"></cart>
    </div>
</template>

<script>
  import Cart from "./components/Cart.vue";
  import axios from 'axios';

  export default {
    name: "app",
    components: {
      Cart
    },
    data() {
      return {
        name: "学习课程",
        text: "",
        goods: []
      }
    },
    async created(){
      const response = await axios.get('/api/goods')
      console.log(response)
      this.goods = response.data.list
    },
    methods: {
      addCart(i) {
        const good = this.goods[i];
        this.$eventBus.$emit('addCart', good)
      }
    }
  }
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    ul, li {
        list-style: none;
    }
</style>
