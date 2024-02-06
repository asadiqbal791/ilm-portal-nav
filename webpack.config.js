// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/', // Output folder for images
              },
            },
          ],
        },
      ],
    },
  };
  