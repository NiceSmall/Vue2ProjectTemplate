module.exports = ({ file }) => {
  const designWidth = file.dirname.includes('vant') ? 375 : 750;
  return {
    plugins: {
      autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
      "postcss-px-to-viewport": {
        unitToConvert: "px", // 要转化的单位
        viewportWidth: designWidth, // UI设计稿的宽度 vant的为 375
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ["*","!letter-spacing"], // 这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: ["nopostcss"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [], // 设置忽略文件，用正则做目录名匹配
        landscape: false // 是否处理横屏情况
      }
    }
  }
};