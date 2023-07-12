const path = require('path');
// 운영체제별로 상이한 경로 문법을 해결해 절대 경로로 반환하는 역할을 합니다. 

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('./src/app.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      // {
      //   test: /.js$ /,
      //   use: [
      //     path.resolve('./myLoader.js')
      //   ]
      // }
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  }
}