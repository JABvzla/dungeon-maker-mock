const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: "inline-source-map",
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
							emitErrors: true,
							typeCheck: true,
							fix: true,
						}
                    }
                ]
            },
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
			}
		]
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.ts', '.js', '.json']
	}
};