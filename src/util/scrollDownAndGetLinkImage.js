module.exports = function scrollDownAndGetLinkImage (selector = {}) {
    return new Promise((resolve, reject) => {
        let result = [];
        const interval = setInterval(() => {
            if (!document.querySelector(selector.loading)) {
                clearInterval(interval);
                resolve(result)
            };
            const listImage = [...document.querySelectorAll(selector.images)];
            listImage.forEach(image => {
                let link = image.src;
                result.includes(link) ? '' : result.push(link)
            });
            window.scrollBy(0, window.innerHeight)
        }, 700)
    })
    .catch(err => {
        console.log(err)
        return []
    })
}