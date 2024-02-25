const io = require("../app")
const taskModel = require('../models/task.model')

module.exports.getPublicHomePage = function getPublicHomePage(req, res){
    console.log('get public home page')
    return res.sendFile(dirname+'/views/public_home_page.html')
}

module.exports.post_dump_location = async function post_dump_location(req, res){
    try {

        let data = req.body;
        console.log(data)

        let task = await taskModel.create(data);

        // broadcasting socket event
        io.sockets.emit('new-dump-location', JSON.stringify(data))
        
        return res.redirect('/')
        // return res.send('post dump location')
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

module.exports.aboutPage = function aboutPage(req, res){
    return res.sendFile(__dirname+'/views/about.html')
}

module.exports.servicesPage = function servicesPage(req, res){
    res.send('<i><h3>Currently site under development!</h3></i>')
}

