var path = require('path');
 var webpack = require('webpack');

/*{
    entry: {
        a: "./a",
        b: "./b",
        c: ["./c", "./d"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].entry.js"
    }
}*/




 module.exports = {
     entry: './js/principal.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };