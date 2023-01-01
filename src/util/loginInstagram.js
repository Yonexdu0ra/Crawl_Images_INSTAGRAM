require('dotenv').config()
module.exports = async function (page, USERNAME, PASSWORD) {
    try {
        console.log('bắt đầu đăng nhập...')
        await page.goto('https://www.instagram.com/accounts/login/')
        await Promise.all([
            page.waitForSelector('input[name="username"]'),
            page.waitForSelector('input[name="password"]'),
            page.waitForSelector('button[type="submit"]')
        ])
        await page.focus('input[name="username"]')
        await page.keyboard.type(USERNAME)
        console.log(`Đã nhập USERNAME`)
        await page.focus('input[name="password"]')
        await page.keyboard.type(PASSWORD)
        console.log(`Đã nhập PASSWORD`)
        console.log('đang đăng nhập vui lòng đợi...')
        await Promise.all([page.click('button[type="submit"]'), page.waitForNavigation({
            waitUntil: 'networkidle2'
        })])
    } catch (error) {
        console.log(`Login Error: ${error.message}`)
        return error
    }
}