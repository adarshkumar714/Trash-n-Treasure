const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

// connecting to db
const db_link = process.env.DB_LINK;
mongoose.connect(db_link)
.then((db)=>{
    // console.log(db)
    console.log('[+] task db connected')
})
.catch((err)=>{
    console.log(err)
})

// schema
const taskSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phNumber:{
        type:Number,
        require:true
    },
    location:{
        type:String,
        require:true
    }
})

// model
const taskModel = mongoose.model('tnt-tasks', taskSchema); // tnt-user -> trash-n-treasure-user

module.exports = taskModel