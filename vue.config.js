// vue.config.js
import webpack from 'webpack';

export default {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          // Add any other environment variables here if needed
        }
      })
    ]
  }
};
