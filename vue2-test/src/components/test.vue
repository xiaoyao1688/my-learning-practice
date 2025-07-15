<template>
  <div class="test-page">
    <h1>欢迎来到Test页面</h1>
    <h3>Params:{{ $route.params }}</h3>
    <h3>Query:{{ $route.query }}</h3>
  </div>
</template>

<script>
export default {
  name: "test"
}
</script>

<style scoped>

</style>