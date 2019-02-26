const {input, output, plugins} = require('../common/js.config.js');
const outputDir = 'export/js';

module.exports = {
	name: 'js',
	plugins: [
		{
			name: '@deg-skeletor/plugin-rollup',
			config: {
				input,
				output: output(outputDir),
				plugins: [
					plugins,
					require('rollup-plugin-terser').terser()
				],
				experimentalCodeSplitting: true
			}
		},
		{
			name: '@deg-skeletor/plugin-copy',
			config: {
				directories: [{
					src: 'node_modules/systemjs/dist/s.min.js',
					dest: `${outputDir}/vendor`
				}]
			}
		}
	]
};