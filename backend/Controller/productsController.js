const productModel=require('../models/productModel');
// Get product Api- api/v1/products

exports.getProducts = async (req, res, next) => {
    try {
        // Construct the query object based on the presence of the keyword query parameter
        const query = req.query.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i'
            }
        } : {};

        // Fetch the products from the database using the constructed query
        const products = await productModel.find(query);

        // Send the response with the products
        res.json({
            success: true,
            products
        });
    } catch (error) {
        // Handle any errors that may occur
        next(error);
    }
};

// Get  single product Api- api/v1/product
exports.getSingleProduct = async (req, res, next) => {
    const productId = req.params.id;
    console.log(`Fetching product with ID: ${productId}`);
    try {
        // // Verify the ID format
        // if (!mongoose.Types.ObjectId.isValid(productId)) {
        //     return res.status(400).json({
        //         success: true,
        //         message: 'Invalid product ID format'
        //     });
        // }

        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.json({
            success: true,
            product
        });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

    


   
      
   
    
