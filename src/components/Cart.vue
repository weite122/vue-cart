<template>
  <div>
    <div>{{name}}购物车</div>
    <table border="1">
      <tr>
        <th>课程名</th>
        <th>单价</th>
        <th>数量</th>
        <th>价格</th>
      </tr>
      <tr v-for="c in cart" :key="c.id">
        <td>{{c.text}}</td>
        <td>￥{{c.price}}</td>
        <td>{{c.count}}</td>
        <td>{{c.count*c.price}}</td>
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
    },
    cart: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>

</style>
