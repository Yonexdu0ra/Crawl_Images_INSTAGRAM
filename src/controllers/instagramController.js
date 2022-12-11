require('dotenv').config()
const browser = require('../util/browser')
const isLogin = require('../util/isLoginInstagram')
const login = require('../util/loginInstagram')
class Instagram {

    get(req, res) {
        return res.render('home')
    }
    async post(req, res) {
        let { url } = req.body
        if (!url.includes('instagram.com')) {
            return res.status(404).json({ 
                'messgae': "can't find user"
             })
        }
        await isLogin ? '' : await login(process.env.USERNAME, process.env.PASSWORD)
    }
}


module.exports = new Instagram()