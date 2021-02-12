const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = async ({ config }) => {
    config.resolve = Object.assign(config.resolve, {
        alias: {
            'pages': resolve('../src/pages'),
            'test': resolve('../src/test'),
            'styles': resolve('../src/styles'),
            'common': resolve('../src/components/common'),
            'components': resolve('../src/components'),
            'images': resolve('../src/images'),
            public: resolve('../public'),
        },
    });

    return config;
};
