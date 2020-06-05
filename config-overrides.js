const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

const rewiredMap = config => {
  config.devtool =
    config.mode === 'development' ? 'cheap-module-source-map' : false; // 生产环境关闭sourcemap关闭
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '@constants': resolve(__dirname, 'src/constants'),
    '@components': resolve(__dirname, 'src/components'),
  }),
  rewiredMap
);
