const puppeteer = require('puppeteer-core')
const config = require('../config/puppeteer')
module.exports = async function browser (config = {}) {
    return await puppeteer.launch(config)
}