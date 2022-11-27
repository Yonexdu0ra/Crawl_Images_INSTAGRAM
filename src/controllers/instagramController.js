const puppeteer = require("puppeteer-core");
const config = require('../config/puppeteer')
class Instagram {
    get(req, res) {
        return res.render('home')
    }
    async post(req, res) {
        // console.log(req.body)
        try {
            let { url } = req.body;
            if (url && url.includes('instagram.com')) {
                const browser = await puppeteer.launch(config);
                console.log('open browser')
                const page = await browser.newPage()
                console.log('open new tab')
                await page.goto(url)
                await page.waitForSelector(process.env.IMAGE)
                console.log('go to', url)
                console.log('start get link')
                const data = await page.evaluate(() => {
                    return new Promise((resolve) => {
                        let result = [];
                        const interval = setInterval(() => {
                            if (!document.querySelector('svg[aria-label="Đang tải..."]')) {
                                clearInterval(interval);
                                resolve(result)
                            };
                            const listImage = [...document.querySelectorAll('img.x5yr21d.xu96u03.x10l6tqk.x13vifvy.x87ps6o.xh8yej3')];
                            listImage.forEach(image => {
                                let link = image.src;
                                result.includes(link) ? '' : result.push(link)
                            });
                            window.scrollBy(0, window.innerHeight)
                        }, 700)
                    })
                    .catch(err => {
                        console.error(err)
                        return err
                    })
                })
                console.log('get done')
                await browser.close()
                console.log('close browser')
                return res.json(data)
            }
        } catch (error) {
            console.log(error)
            res.json({ error })
        }
    }
}

module.exports = new Instagram()