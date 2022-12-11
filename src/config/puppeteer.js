require('dotenv').config()
module.exports = {
    headless: false,
    executablePath: process.env.PATH_CHROME,
    // userDataDir: process.env.PATH_DATA_CHROME,
    args: [
        '--incognito',
        // '--ignore-certificate-errors',
        // '--no-sandbox',
        // '--disable-setuid-sandbox',
        '--window-size=1920,1080',
        // "--disable-accelerated-2d-canvas",
        // "--disable-gpu"
    ],
}