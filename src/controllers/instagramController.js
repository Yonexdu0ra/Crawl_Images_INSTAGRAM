const puppeteer = require('puppeteer-core')
const config = require('../config/puppeteer')
const isLoginIG = require('../util/isLoginInstagram')
const loginIG = require('../util/loginInstagram')
class Instagram {
    get(req, res) {
        return res.render('home')
    }
    async post(req, res) {
        const browser = await puppeteer.launch(config)
        try {
            let { url } = req.body
            if (!url.includes('instagram.com')) {
                return res.status(404).json({
                    status: 'error',
                    data: []
                })
            }
            
            console.log(`Mở trình duyệt`)
            const page = await browser.newPage()
            // await page.setViewport({ width: 1920, height: 1080 })
            await isLoginIG(page) || await loginIG(page, process.env.ACCOUNT, process.env.PASSWORD)
            console.log(`chuyển hướng tới: ${url}`)
            await Promise.all([
                page.goto(url),
                page.waitForNavigation({
                    waitUntil: 'networkidle2'
                })
            ])
            console.log(`Bắt đầu lấy ảnh...`)
            const listImages = await page.evaluate((loading, image) => {
                return new Promise((resolve, reject) => {
                    let result = [];
                    const interval = setInterval(() => {
                        if (!document.querySelector(loading)) {
                            clearInterval(interval);
                            resolve(result)
                        };
                        const listImage = [...document.querySelectorAll(image)];
                        listImage.forEach(image => {
                            let link = image.src;
                            result.includes(link) ? '' : result.push(link)
                        });
                        window.scrollBy(0, window.innerHeight)
                    }, 700)
                })
                    .then(data => {
                        console.log(data)
                        return data
                    })
                    .catch(err => {
                        console.log(err)
                        return []
                    })
            }, process.env.ISLOADING, process.env.IMAGE)
            await browser.close();
            console.log(`Lây thành công: ${listImages}`)
            return res.status(200).json({
                status: 'success',
                data: listImages
            })
        }
        catch (error) {
            await browser.close()
            console.log(error)
            return res.status(504).json({
                status: `error`,
                data: []
            })
        }
    }
}


module.exports = new Instagram()