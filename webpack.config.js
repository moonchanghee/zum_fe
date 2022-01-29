module.exports = { 
    mode : 'development',
    // entry: __dirname + '/src/index.js', 
    // entry: {
    //     // router: './router.js',
    //     app: '/src/index.js'
    //   },
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    } ,
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /(node_modules|bower_components)/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env', '@babel/preset-react'],
    //                     plugins: ['@babel/plugin-proposal-object-rest-spread']
    //                 }
    //             }
    //         },
    //         {
    //             test: /\.css$/,
    //             use: [
    //               { loader: "style-loader" },
    //               { loader: "css-loader" }
    //             ]
    //         },      
    //     ]
    // },
};
 
