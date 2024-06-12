const path = require('path');

module.exports = {
  devServer: {
    port: 8001,
    proxy: {
            '/jjy': {
                target: 'http://115.29.186.194',
                changeOrigin: true,
                pathRewrite: {
                    "^/jjy": "/jjy"
                }
            },
        }
  },
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
