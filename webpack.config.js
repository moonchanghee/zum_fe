module.exports = { 
    mode : 'development',
    entry: {
        app: '/src/index.js'
      },
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    } ,
};
 
