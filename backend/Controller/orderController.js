const orderModel=require('../models/orderModel');
const productModel=require('../models/productModel');

exports.createOrder= async(req,res,next)=>{

    const cartItem = req.body;

    // Check if cartItem is an array
    if (!Array.isArray(cartItem)) {
        return res.status(400).send('Invalid cart items');
    }
    
    const amount = cartItem.reduce((acc, item) => {
        // Convert price and qty to numbers
        const price = parseFloat(item.product.price);
        const qty = parseInt(item.qty, 10);
    
        // Ensure price and qty are valid numbers
        if (isNaN(price) || isNaN(qty)) {
            return acc; // Skip this item or handle the error as needed
        }
    
    const result= acc +(price * qty);
    return Number(result).toFixed(2);
    }, 0);
    
   const status="pending";
    
   const order=await orderModel.create({cartItem,amount,status})

   // updating product stock

   cartItem.forEach(async (item)=>{
    const product=await productModel.findById(item.product._id);
    product.stock =product.stock -item.qty;
    await product.save();
   })
    res.json({
        success:true,
        order
    })
}