const { linkSync } = require("fs");

function getLinkImageIG(link) {
    if(link.srcset) {
        link = link.srcset.split(',');
        link = link[link.length - 1];
        link = link.split(' ')[1]
    } else {
        link = link.src
    }
    return link
}

module.exports = getLinkImageIG