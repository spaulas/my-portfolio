const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = async ({ config }) => {
    config.resolve = Object.assign(config.resolve, {
        alias: {
            '@pages': resolve('../src/pages'),
            'testHelpers': resolve('../src/test'),
            '@styles': resolve('../src/styles'),
            'common': resolve('../src/components/common'),
            '@components': resolve('../src/components'),
            'imgAssets': resolve('../src/images'),
            'constants': resolve('../src/constants'),
            public: resolve('../public'),
        },
    });

    return config;
};
