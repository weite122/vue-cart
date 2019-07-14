<template>
    <div>
        <div>{{name}}购物车</div>
        <table border="1">
            <tr>
                <th>#</th>
                <th>课程名</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            <tr v-for="(c, index) in cart" :key="c.id" :class="{active:c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td>{{c.text}}</td>
                <td>￥{{c.price}}</td>
                <td>
                    <button @click="minus(index)">-</button>
                    {{c.count}}
                    <button @click="add(index)">+</button>
                </td>
                <td>{{c.count*c.price}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{activeCount}}/{{totalCount}}</td>
                <td colspan="2">￥{{total}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: "Cart",
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        cart: []
      }
    },
    created() {
      this.$eventBus.$on('addCart', good => {
        const ret = this.cart.find(v => v.id === good.id);
        if (ret) {
          ret.count += 1;
        } else {
          this.cart.push({...good, active: true, count: 1});
        }
      })
    },
    methods: {
      minus(i) {
        const count = this.cart[i].count
        if (count > 1) {
          this.cart[i].count -= 1
        } else {
          this.remove(i)
        }
      },
      add(i) {
        this.cart[i].count += 1
      },
      remove(i) {
        if (window.confirm('确定删除?')) {
          this.cart.splice(i, 1)
        }
      }
    },
    computed: {
      activeCount() {
        return this.cart.filter(v => v.active).length
      },
      totalCount() {
        return this.cart.length
      },
      total() {
        let num = 0
        this.cart.forEach(c => {
          if (c.active) {
            num += c.price * c.count
          }
        })
        return num
      }
    }

  };
</script>

<style lang="scss" scoped>
    .active {
        color: darkgreen;
    }
</style>
