let mongoose        = require('mongoose');

var ProductCategorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }   
}, {timestamps: true})

mongoose.model('ProductCategory', ProductCategorySchema)