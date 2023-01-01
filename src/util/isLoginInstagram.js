module.exports = async function isLoginInstagrams(page) {
    try {
        // const page = await browser.newPage()
        await page.goto('https://www.instagram.com/accounts/login/')
        await page.waitForSelector(process.env.IS_CHECK_LOGIN)
        const isLogin = await page.evaluate(() => {
            return window.location.href.includes('instagram.com/accounts/login') ? false : true
        })
        console.log(`chưa đăng nhập`)
        return isLogin
    } catch (error) {
        console.error(error)
    }
}