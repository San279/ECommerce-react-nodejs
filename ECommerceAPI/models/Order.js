const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema({
    userId: {type:String, required:true},
    products:[
        {
            productName:{
                type:String
            },
            productDimension:{
                type:String
            },
            productPrice:{
                type:Number
            },
            productImg:{
                type:String
            },
            productId:{
                type:String
            },
            quantity: {
                type:Number,
                default: 1,
            },
        },
    ],
    amount:{type:Number, required: true}, 
    address:{type: Object, required: true},
    status:{type:String, default:"pending"},
},
    {timestamps: true}
);


module.exports = mongoose.model("Order",OrderSchema);