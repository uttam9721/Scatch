const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch")


const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    // cart:{
    //     type:Array,
    //     default:[]
    // },
    // isadmin:Boolean,
    products:{
        type:Array,
        default:[],
    },
    // contact:Number,
    picture:String,
    gstin:String,

})

module.exports= mongoose.model("owner",ownerSchema)