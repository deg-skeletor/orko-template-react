const path = require('path');

module.exports = {
	directories: function({imagesDestPath, fontsDestPath}) {
		return [
            {
                src: 'source/images',
                dest: path.resolve(imagesDestPath)
            },
            {
                src: 'source/fonts',
                dest: path.resolve(fontsDestPath)
            }
        ];
	}
}