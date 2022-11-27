// require('dotenv').config()
// const puppeteer = require("puppeteer-core");
// const config = require('./src/config/puppeteer');
// // console.log(config);
// (async () => {
//     const browser = await puppeteer.launch(config)
//     const page = await browser.newPage()
//     await page.goto('https://www.instagram.com/jiashennn_hia/')
//     await page.waitForSelector(process.env.IMAGE)
//     const data = await page.evaluate(() => {
//         return new Promise((resolve, reject) => {
//             let result = [];
//             const interval = setInterval(() => {
//                 if (!document.querySelector('svg[aria-label="Đang tải..."]')) {
//                     clearInterval(interval);
//                     resolve(result)
//                 };
//                 const listImage = [...document.querySelectorAll('img.x5yr21d.xu96u03.x10l6tqk.x13vifvy.x87ps6o.xh8yej3')];
//                 listImage.forEach(image => {
//                     let link = image.src;
//                     result.includes(link) ? '' : result.push(link)
//                 });
//                 window.scrollBy(0, window.innerHeight)
//             }, 700)
//         })
//     })
//     console.log(data)
//     await browser.close()
// })()



console.log(__dirname.split('\\').slice(0,1))