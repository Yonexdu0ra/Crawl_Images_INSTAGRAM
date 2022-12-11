require('dotenv').config()
const browser = require('./browser')
module.exports = async function (USERNAME, PASSWORD) {
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/accounts/login/')
    await Promise.all([
        page.waitForSelector('input[name="username"]'),
        page.waitForSelector('input[name="password"]'),
        page.waitForSelector('button[type="submit"]')
    ])
    await page.focus('input[name="username"]')
    await page.keyboard.type(USERNAME)
    await page.focus('input[name="password"]')
    await page.keyboard.type(PASSWORD)
    await page.click('button[type="submit"]')
}