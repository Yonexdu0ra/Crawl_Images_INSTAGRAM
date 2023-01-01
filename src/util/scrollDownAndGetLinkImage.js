module.exports = function (selectorLoading, selecotorImage) {
    return new Promise((resolve, reject) => {
        let result = [];
        const interval = setInterval(() => {
            if (!document.querySelector(selectorLoading)) {
                clearInterval(interval);
                resolve(result)
            };
            const listImage = [...document.querySelectorAll(selecotorImage)];
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
}