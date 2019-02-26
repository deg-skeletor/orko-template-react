module.exports = {
	name: 'serve',
	plugins: [
		{
			name: '@deg-skeletor/plugin-express',
			config: {
				port: process.env.PORT || 3001,
				entryPoints: [
					{
						entry: '../patternlab',
						route: '/'
					}
				],
				currentDirectory: __dirname,
				middleware: []
			}
		}
	]
};