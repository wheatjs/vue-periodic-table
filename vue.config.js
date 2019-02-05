const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/app/shared/components'),
                '@shared': path.resolve(__dirname, 'src/app/shared'),
                '@assets': path.resolve(__dirname, 'src/app/shared/assets'),
                '@app': path.resolve(__dirname, 'src/app'),
            }
        }
    }
}