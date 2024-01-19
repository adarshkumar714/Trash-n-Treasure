const userModel = require('../models/user.model')
const taskModel = require('../models/task.model')
const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../secrets')

module.exports.getUser = async function getUser(req, res) {
    let id = req.id;

    let user = await userModel.findById(id);
    if (user) {
        return res.json({
            user: user
        })
    }
    else {
        return res.json({
            msg: 'user not found'
        })
    }
}

module.exports.fetchTasks = async function fetchTasks(req, res){
    let tasks = await taskModel.find();
    res.json({
        'tasks': tasks
    });
}



