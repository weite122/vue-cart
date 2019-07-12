<template>
    <div id="app">
        <ul>
            <li v-for="(good, index) in goods" :key="good.id">{{good.text}}
                <span>{{good.text}}</span>
                <span>${{good.price}}</span>
                <button @click="addCart(index)">添加购物车</button>
            </li>


        </ul>
        <cart :name="name" :cart="cart"></cart>
    </div>
</template>

<script>
  import Cart from "./components/Cart.vue";

  export default {
    name: "app",
    components: {
      Cart
    },
    data() {
      return {
        name: "学习课程",
        text: "",
        goods: [
          {id: 1, text: "c", price: 100},
          {id: 2, text: "web", price: 80},
          {id: 3, text: "Python", price: 60},
          {id: 4, text: "Java", price: 80}
        ],
        cart: []
      };
    },
    methods: {
      addCart(i) {
        const good = this.goods[i];
        const ret = this.cart.find(v => v.text == good.text);
        if (ret) {
          ret.count += 1;
        } else {
          this.cart.push({...good, active: true, count: 1});
        }
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
