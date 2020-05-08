const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@components': path.resolve(__dirname, 'src/components'),
  })
);
