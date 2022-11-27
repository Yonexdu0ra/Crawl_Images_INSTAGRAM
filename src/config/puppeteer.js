require('dotenv').config()
module.exports = {
    headless: false,
    executablePath: process.env.PATH_CHROME,
    userDataDir: process.env.PATH_DATA_CHROME,
    // args: ['--incognito']
}