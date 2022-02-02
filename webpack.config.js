module.exports = { 
    mode : 'production',
    entry: {
        app: '/src/index.js'
      },
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    } ,
    devServer : {
        historyApiFallback :true,
    }
};

