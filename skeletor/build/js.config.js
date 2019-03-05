const {input, output, plugins} = require('../common/js.config.js');
const outputDir = 'app/js';

module.exports = {
	name: 'js',
	plugins: [
		{
			name: '@deg-skeletor/plugin-rollup',
			config: [
                {
                    input,
                    output: output(outputDir),
                    plugins: plugins(),
                    experimentalCodeSplitting: true
                },
                {
                    input,
                    output: output(outputDir, false),
                    plugins: plugins(false),
                    experimentalCodeSplitting: true
                }
            ]
        }
	]
};