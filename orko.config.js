module.exports = {
    hooks: {
        afterdownload: [
            {
                src: '/orko/.gitignore',
                dest: '/.gitignore'
            },
            {
                src: '/orko/package.json',
                dest: '/package.json'
            },
            {
                src: '/orko/README.md',
                dest: '/README.md'
            }
        ],
        afterinstall: [
            {
                src: '/orko/_01-foot.mustache',
                dest: '/source/_meta/_01-foot.mustache'
            },
            {
                src: '/orko/global.css',
                dest: '/source/css/global.css'
            },
            {
                src: '/orko/main.js',
                dest: '/source/js/main.js'
            }
        ]
    }
};