var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .copyFiles([
        {from: './assets/images', to: 'images/[path][name].[ext]'},
        {from: './assets/img', to: 'img/[path][name].[ext]'},
        {from: './assets/svg', to: 'svg/[path][name].[ext]'},
        {from: './assets/fonts', to: 'fonts/[path][name].[ext]'},
    ])
    // entries
    .addEntry('frontend', './assets/js/frontend.js')
    .addEntry('backend', './assets/js/backend.js')
    .addEntry('fullcalendardefaultsettings', './assets/js/fullcalendar.default-settings.js')
    .addEntry('fullcalendarstudentsettings', './assets/js/fullcalendar.student-settings.js')
    // configs
    .autoProvidejQuery()
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    // enablers
    .enableSingleRuntimeChunk()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .enableStimulusBridge('./assets/controllers.json')
;

module.exports = Encore.getWebpackConfig();
