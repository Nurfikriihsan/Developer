module.exports = {
    chainWebpack: config => {
      config.resolve.alias
        .set('@', require('path').resolve(__dirname, 'src'))
    }
  };
  