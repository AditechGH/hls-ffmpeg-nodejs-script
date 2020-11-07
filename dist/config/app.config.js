"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    static get baseUrl() {
        return '/api/v1/';
    }
    static get env() {
        return process.env.NODE_ENV;
    }
    static get devConfig() {
        return {
            database: `mongodb://localhost:27017/hls-ffmpeg-dev`,
            secret: process.env.DEV_SECRET || 'S3CR3!',
            HTTP_PORT: process.env.PORT || 4000,
            HTTPS_PORT: process.env.PORT || 4343,
        };
    }
    static get testConfig() {
        return {
            database: `mongodb://localhost:27017/hls-ffmpeg-test`,
            secret: process.env.TEST_SECRET || 'S3CR3!',
            HTTP_PORT: process.env.PORT || 3000,
            HTTPS_PORT: process.env.PORT || 4343,
        };
    }
    static get prodConfig() {
        return {
            database: `mongodb://localhost:27017/hls-ffmpeg-prod`,
            secret: process.env.SECRET || 'S3CR3!',
            HTTP_PORT: process.env.PORT || 80,
            HTTPS_PORT: process.env.PORT || 443,
        };
    }
    static get defaultConfig() {
        return {
            BASE_URL: this.baseUrl,
            ENV: this.env,
            REDIS_PORT: process.env.REDIS_PORT || 6379,
            REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
            REDIS_AUTH: process.env.REDIS_AUTH || null,
        };
    }
    static envConfig(env) {
        switch (env) {
            case 'development':
                return this.devConfig;
            case 'test':
                return this.testConfig;
            default:
                return this.prodConfig;
        }
    }
    /**
     * constants
     */
    static get constants() {
        return Object.assign(Object.assign({}, this.defaultConfig), this.envConfig(this.env));
    }
}
exports.default = Config;
//# sourceMappingURL=app.config.js.map