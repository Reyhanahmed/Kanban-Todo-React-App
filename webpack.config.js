var HtmlWebpackPlugin = require("webpack-html-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: __dirname + "/src/js/app.js",
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-2']
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules')
			},
			{
		        test: /\.(jpe?g|png|gif|svg)$/i,
		        loaders: [
		            'file?hash=sha512&digest=hex&name=[hash].[ext]',
		            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		        ]
		    }
		]
	},
	plugins: [HtmlWebpackPluginConfig,
			  new ExtractTextPlugin('style.css')
			 ]

}