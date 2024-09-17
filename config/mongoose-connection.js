const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(()=>{
    dbgr('connected to database')
})
.catch((err)=>{
    console.log(err)
    })
    // <|eom_id|><|start_header_id|>assistant<|end_header_id|>
module.exports= mongoose.connection;