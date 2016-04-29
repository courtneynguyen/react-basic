var path = require('path');
module.exports = {
    entry: {
		"app": "./src/app.jsx"
    },
    module: {
		debug: true,
		devtool: "source-map",
        loaders: [
            {
               test: /\.jsx$/,
               exclude: /node_modules/,
               loader: "babel",
					include: [
						path.resolve(__dirname, 'src')
					]
            }
        ]
    },
	 output: {
		filename: '[name].js',
  	}
};
