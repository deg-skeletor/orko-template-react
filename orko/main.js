import moduleLoader from '@degjs/module-loader';

const init = () => {
    let basePath = ENVIRONMENT === 'development' ? '/js/' : '/Scripts/';
    if (!supportsDynamicImports()) {
        basePath += 'nomodule/';
    }

    moduleLoader({
        basePath,
        filenameSuffix: '.js',
        enableObservation: false
    });
}

const supportsDynamicImports = () => {
    try {
        new Function('import("")');
        return true;
    } catch (err) {
        return false;
    }
};

init();