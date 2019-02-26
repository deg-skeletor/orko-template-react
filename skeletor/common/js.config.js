const path = require('path');

const legacyBabelPresets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            targets: '> 1%, ie 11'
        }
    ]
];

const modernBabelPresets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            targets: 'Firefox >= 62, Edge >= 17, Chrome >= 69, iOS >= 11.4, ChromeAndroid >= 70'
        }
    ]
];

module.exports = {
    input: [
        'source/js/main.js'
    ],
    output: (destPath, isModern = true) => [
        {
            dir: destPath,
            format: 'es'
        },
        {
            dir: isModern ? destPath : path.join(destPath, 'nomodule'),
            format: isModern ? 'es' : 'system'
        }
    ],
    plugins: (isModern = true) => [
        require('rollup-plugin-replace')({
            ENVIRONMENT: () => JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.NODE_ENV': () => JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        require('rollup-plugin-babel')({
            include: [
                'source/js/**',
                'node_modules/@degjs/**'
            ],
            babelrc: false,
            presets: isModern ? modernBabelPresets : legacyBabelPresets,
            plugins: [
                '@babel/plugin-syntax-dynamic-import'
            ],
        }),
        require('rollup-plugin-node-resolve')({
            browser: true
        }),
        require('rollup-plugin-commonjs')({
            include: 'node_modules/**'
        })
    ]
};
