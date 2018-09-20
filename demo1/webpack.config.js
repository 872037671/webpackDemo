const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports ={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader:"babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}