const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.tsx',  // Mudei para 'src/index.tsx' para seguir a convenção de projeto
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',  // Isso ajuda com o roteamento do React
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                publicPath: 'images/',
              },
            },
          ],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8080,
      historyApiFallback: true,  // Isso garante que o React Router funcione corretamente
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',  // Usando um template HTML para injetar o bundle.js
      }),
    ],
    mode: isProduction ? 'production' : 'development',
  };
};
