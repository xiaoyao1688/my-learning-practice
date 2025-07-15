<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <button @click="clickHandle">跳转</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      routeParam:'路由参数',
      routeParam2:'param2'
    }
  },
  methods:{
    clickHandle(){
      this.$router.push({
        name:`test`,
        // params:{param1:this.routeParam,param2:this.routeParam2},
        // query:{routeParam:this.routeParam}
        // query:{param1:this.routeParam,param2:this.routeParam2}
      })
      this.$router.push(`/test?routeParam=${this.routeParam}&routeParam2=${this.routeParam2}&routeParam3=${this.routeParam}`)
      // this.$router.push(`/test/${this.routeParam}/${this.routeParam}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
