const {patternLabConfig} = require('./skeletor/common/patterns.config.js');

module.exports = {
	name: 'install',
	subTasks: [
		{
			name: 'starterkit',
			plugins: [
				{
					name: '@deg-skeletor/plugin-patternlab',
					config: {                
						patternLabConfig,
						method: 'loadstarterkit',
						methodArgs: ['@deg-skeletor/starterkit-mustache-default']
					}
				}
			]
		}
	]
};