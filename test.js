require('dotenv').config()
const puppeteer = require("puppeteer-core");
const config = require('./src/config/puppeteer');
// const browser = require('./src/util/browser');
console.log(process.env.USERNAME, process.env.PASSWORD);
(async () => {
    const chrome = await puppeteer.launch(config)
    const page = await chrome.newPage()
    await page.goto('https://www.instagram.com/accounts/login/')
    await Promise.all([
        page.waitForSelector('input[name="username"]'),
        page.waitForSelector('input[name="password"]'),
        page.waitForSelector('button[type="submit"]')
    ])
    await page.focus('input[name="username"]')
    await page.keyboard.type(process.env.USERNAME)
    await page.focus('input[name="password"]')
    await page.keyboard.type(process.env.PASSWORD)
    await page.click('button[type="submit"]')
    // await page.waitForNavigation()
    // await page.close()
})()

