require('dotenv').config()
const browser = require('./browser')
module.exports = async function isLoginInstagrams() {
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/accounts/login/')
    await page.waitForSelector(process.env.IS_CHECK_LOGIN)
    const isLogin = await page.evaluate(() => {
        return window.location.host.includes('accounts/login') ? false : true
    })
    console.log(`${isLogin ? 'logged' : 'not logged in'} `)
    return isLogin
}