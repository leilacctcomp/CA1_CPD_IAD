const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/background.js'
    }
  }
})
/**module.exports = {
  publicPath: '/', // The base URL your application bundle will be deployed at.
  outputDir: 'dist', // The directory where the production build files will be generated in when running vue-cli-service build.
  lintOnSave: true, // Lint your code when you save a file.
  productionSourceMap: false, // Generate source maps for your production build.

  // Modify webpack's configuration
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },

  // Use the chainWebpack option to modify the internal webpack configuration
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'My Custom Title';
        return args;
      });
  },

  // Dev Server Options
  devServer: {
    proxy: 'http://localhost:4000', // Proxy your API if you have one
  }
}
 */