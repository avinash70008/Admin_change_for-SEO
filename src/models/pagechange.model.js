const mongoose =require("mongoose");

const PagechangeSchema = new mongoose.Schema({
    htxt:{type:String , required: false },
    stxt: {type: String , required: false },
    link:{ type: String , required: false},
    img:{type: String ,required: false},
    icon: {type: String , required: false }

})

module.exports = mongoose.model("pagechange" , PagechangeSchema)

