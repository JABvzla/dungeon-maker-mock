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
                test: /\.ts$/,
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
				loader: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"]
	}
};