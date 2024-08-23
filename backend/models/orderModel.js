const mongoose=require("mongoose");


 const orderSchema=new mongoose.Schema({
cartItem:Array,
amount:String,
status:String,
createAdt:Date
})
const orderModel=mongoose.model('order', orderSchema);

module.exports=orderModel;