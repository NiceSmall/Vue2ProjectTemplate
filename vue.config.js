'use strict'
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 输出 vue.config.js 配置 vue inspect --mode production > output.js
let _env = {}
if (process.env.NODE_ENV === 'production') {
  _env = {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'echarts': 'echarts',
    'element-ui': 'ELEMENT'
  }
}
module.exports = {
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'dist',
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  publicPath: '/webpath/a/',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 构建多页时使用
  pages: undefined,
  // eslint-loader是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    port: 9528,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    // '/dev-api': {
    //   // 要访问接口的地址
    //   target: 'http://192.168.1.125:8001',
    //   changeOrigin: true,
    //   ws: false,
    //   pathRewrite: {
    //     '^/dev-api': ''
    //   }
    // }
    // }
  },
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true)
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.resolve.alias
      .set('@', resolve('src'))
    if (process.env.NODE_ENV === 'production') {
      // 开启打包压缩
      config.plugin('CompressionWebpackPlugin')
        .use(new CompressionWebpackPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        }))
      // 选择打包模板
      config.plugin('html').tap(args => {
        // 修复 Lazy loading routes Error
        args[0].template = resolve('templates') + '\\index.prod.html'
        args[0].chunksSortMode = 'none'
        console.log('当前打包模板=> ' + args[0].template)
        return args
      })
    } else {
      config.plugin('html').tap(args => {
        // 修复 Lazy loading routes Error
        args[0].template = resolve('templates') + '\\index.dev.html'
        args[0].chunksSortMode = 'none'
        console.log('当前打包模板=> ' + args[0].template)
        return args
      })
    }
  },
  configureWebpack: {
    name: 'loading',
    externals: _env
  },
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  css: {
    // 启用 CSS modules
    requireModuleExtension: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require('precss'),
          require('autoprefixer'),
          require('postcss-flexibility')
        ]
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
