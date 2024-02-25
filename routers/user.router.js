const express = require('express')

const log = require('../logger')
const { getUser, updateUser, deleteUser, fetchTasks } = require('../controller/user.controller')
const { isAuthorised, signup, logout, getSignupPage, getLoginPage, login, forgetpassword, getResetPasswordPage, resetpassword, protectRoute } = require('../controller/auth.controller')
const userRouter = express.Router()

// user options
userRouter.route('/register')
.get(getSignupPage)
.post(signup)

userRouter.route('/login')
.get(getLoginPage)
.post(login)


// profile page
userRouter.use(protectRoute)
userRouter.route('/home')
.get((req, res)=>{
    console.log('error')
    res.sendFile(__dirname+'/views/user_home_page.html')
})

userRouter.route('/fetch-tasks')
.get(fetchTasks)

userRouter.route('/logout')
.get(logout)

userRouter.route('')
.get((req, res)=>{
    res.redirect('/user/home')
})

// ADMIN SPECIFIC ROUTES
userRouter.use(isAuthorised(['admin']))

module.exports = userRouter