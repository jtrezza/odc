var webpack = require('webpack');
var ENV = process.env.NODE_ENV;

var globals = {
  "process.env.NODE_ENV" : JSON.stringify(ENV),
  __DEV__ : ENV === "development"
};
const getPlugins = function(env){
  var plugins = [
    new webpack.DefinePlugin(globals),
    new webpack.optimize.OccurenceOrderPlugin(),
  ]

  switch (env) {
    case "production":
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin(
	{
         compress: {
           warnings: false
         },
         output: {
          comments: false
         },
         sourceMap: false
        }
    ));
      break;
  }
   // console.log("globalsbrokers", globals);
   return plugins
}

module.exports = {
  debug: true,
  devTool: '',
  entry: './app/assets/react_app/App.jsx',
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'app.js'
  },
  target: 'web',
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  plugins: getPlugins(ENV),
  eslint: {
    failOnWarning: false,
    failOnError: false
  },
};