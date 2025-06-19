const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 临时禁用 ESLint
    devServer: {
        port: 8081 // Set development server port to 8081 to match the API's CORS configuration
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': require('path').resolve(__dirname, 'src')
            }
        }
    },
    chainWebpack: config => {
        config.plugin('define').tap(args => {
            args[0].__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = 'false'
            return args
        })
    }
})