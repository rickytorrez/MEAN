var mongoose    = require('mongoose');
var ProductCategory     = mongoose.model('ProductCategory');

class ProductCategory{
    all (req, res){
        ProductCategory.find({})
        .populate ({
            path: 'category',
            model: 'Category'
        })
        .populate ({
            path: 'product',
            model: 'Product'
        })
        .exec((err, data) => {
            if(data && !err){
                return res.json(data);
            } else {
                return res.json({errors: err});
            }
        });
    }

// JOIN HAPPENS AT CREATE //
    create (req, res){
        let procat = new ProductCategory(req.body);
        procat.save((err) => {
            if(err){
                return res.json({errors: procat.errors});
            } else {
                ProductCategory.findOne({_id:procat._id})
                .populate ({
                    path: 'category',
                    model: 'Category'
                })
                .populate ({
                    path: 'product',
                    model: 'Product'
                })
                .exec((err, newProCat) => {
                    if(err){
                        return res.json({errors:err});
                    } else {
                        return res.json(newProCat);
                    }
                });
            }
        });
    }
}

module.exports = new ProductCategoryController();