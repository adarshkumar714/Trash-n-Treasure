const express = require('express')

const { getPublicHomePage, post_dump_location, aboutPage, servicesPage } = require('../controller/public.controller.js')
const publicRouter = express.Router()

// publicRouter.use((req, res, next)=>{
//     if(req.cookies.login){
//         return res.send("You are logged in. Go to your <a href='/user/home'>home page</a>")
//     }
//     next()
// })

publicRouter.route('')
.get(getPublicHomePage)

publicRouter.route('/about')
.get(aboutPage)

publicRouter.route('/services')
.get(servicesPage)

publicRouter.route('/post-dump-location')
.post(post_dump_location)

module.exports = publicRouter

