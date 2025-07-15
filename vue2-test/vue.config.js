const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 4000,
    historyApiFallback: true,
    allowedHosts:"all",
  }
})
