module.exports = {
    rootUrl: 'http://localhost:3000',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    browsers: {
        chrome: {
            screenshotMode: 'viewport',
            screenshotDelay: 2000,
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
