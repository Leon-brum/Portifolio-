const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Aplica o ts-loader apenas em arquivos .ts e .tsx
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Aplica o css-loader e style-loader apenas em arquivos .css
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i, // Aplica o file-loader apenas em arquivos de imagem
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Pasta onde as imagens serão colocadas dentro de 'dist'
              publicPath: 'images/', // Caminho público para acessar as imagens
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
  },
};
