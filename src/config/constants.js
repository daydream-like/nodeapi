
const devConfig = {
    MONGO_URL:'mongodb://localhost/makeannodejsapi-dev',
    JWT_SECRET:'likechris'
}
const testConfig = {
    MONGO_URL:'mongodb://localhost/makeannodejsapi-test'
}
const prodConfig = {
    MONGO_URL:'mongodb://localhost/makeannodejsapi-prod'
}
const defaultConfig = {
    PORT: process.env.PORT || 4000
}
function envConfig(env) {
    switch (env) {
        case "development":
            return devConfig;
        case "test":
            return testConfig;
        default:
            return prodConfig;
    }
}

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV)
}