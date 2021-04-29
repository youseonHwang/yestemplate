const HTMLWebPackPlugin = require('html-webpack-plugin'); // 아까 설치한 플러그인이죠? html 문서에 자동으로 번들파일을 추가해줍니다.
const path = require('path');

module.exports = {
  entry: './src/index.tsx', // 처음 시작할 파일 지정
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .tsx 확장자로 끝나는 파일들을
        use: 'ts-loader', // ts-loader 가 트랜스파일 해줌
        exclude: /node_modules/ // node_modules 디렉토리에 있는 파일 제외
      }, {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },
  output: {
    filename: 'bundle.js', // build시 만들어질 파일 번들 파일 이름
    path: path.resolve(__dirname, '/dist'), // 그리고 경로
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }) // './src/index.html' 경로의 html 파일에 번들 파일을 넣어줍니다.
  ],
  devServer: {
    historyApiFallback: true,
  },
};