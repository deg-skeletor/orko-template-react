const {input, output, plugins} = require('../common/js.config.js');

module.exports = {
	name: 'js',
	plugins: [
		{
			name: '@deg-skeletor/plugin-rollup',
			config: {
				input: input, 
				output: output('patternlab/js'),  
				plugins: plugins,
				experimentalCodeSplitting: true
			}
		},
		{
            name: '@deg-skeletor/plugin-copy',
            config: {
                directories: [{
                    src: 'node_modules/systemjs/dist/s.min.js',
                    dest: 'patternlab/js/vendor'
                }]
            }
        }
	]
};