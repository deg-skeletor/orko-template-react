const {input, output, plugins} = require('../common/js.config.js');
const terser = require('rollup-plugin-terser').terser();
const outputDir = 'export/js';

module.exports = {
	name: 'js',
	plugins: [
		{
			name: '@deg-skeletor/plugin-rollup',
			config: [
                {
                    input,
                    output: output(outputDir),
                    plugins: [
                        ...plugins(),
                        terser
                    ],
                    experimentalCodeSplitting: true
                },
                {
                    input,
                    output: output(outputDir, false),
                    plugins: [
                        ...plugins(false),
                        terser
                    ],
                    experimentalCodeSplitting: true
                }
            ]
		}
	]
};