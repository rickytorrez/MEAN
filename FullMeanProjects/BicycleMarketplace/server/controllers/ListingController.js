class ListingController {
    create(req, res){

        // checks if there's a user in session, if not, go away
        if(!req.session.uid){
            return res.status(403).json({
                message:"You must be logged in to create a listing!",
                errors:"You must be logged in to create a listing!"
            });
        }

        // if you exist, 
        // create a new instance of the  listing and fill if up with the body of the request
        let listing = new Listing(req.body);

        // before we save, we need to make sure to populate the foreign key
        listing.user = req.session.uid;

        // save listing
        listing.save(err=>{

            // if any errors are found
            if(err){
                return res.status(403).json({
                    message:"Failed to save listing",
                    error:"err"
                });
            } else {
                
                User.findOne({_id:req.session.uid},(err,user)=>{
                    if(user){

                        // push the listing into the user's listings array
                        user.listings.push(listing._id);

                        // save the user
                        user.save(err=>{

                            if(err){
                                return res.status(403).json({
                                    message:"Failed to find user!",
                                    error: err
                                });
                            } else {
                                return res.status(200).json(listing);
                            }
                            
                        });
                    } else {
                        return res.status(404).json({
                            message:"Failed to find user!",
                            error: err
                        });
                    }
                });

                // else, save the listing and return the listing
                return res.status(200).json(listing);
            }
        });
    }

    all(req, res){

        // Populate in case user wants to contact whoever created the listing
        Listing.find({})
        .populate({

            // populate .user (foreign field)
            path:"user",

            // use the model of the foreign key
            model:"User"
        })
        .exec((err, listings)=>{
            if(err){
                return res.status(403).json({
                    message:"Failed to populate listing's user for listing: " + listing._id,
                    errors:err
                });
            } else {
                return res.status(200).json(listings);
            }
        });
    }

    findById(req, res){
        Listing.findOne({_id:req.params.id})
        .populate({

            // populate .user (foreign field)
            path:"user",

            // use the model of the foreign key
            model:"User"
        })
        .exec((err, listing)=>{
            if(err){
                return res.status(403).json({
                    message:"Failed to populate listing's user for listing: " + listing._id,
                    errors:err
                });
            } else {
                return res.status(200).json(listing);
            }
        });
    }

    update(req, res){

        // finds the listing you want to update
        Listing.findOne({_id:req.params.id}, (err,listing)=>{

            // if the listing exists
            if(listing){

                // set the new values to what the form says or user old values if new ones are not provided
                listing.title       = req.body.title || listing.title;
                listing.description = req.body.description || listing.description;
                listing.price       = req.body.price || listing.price;
                listing.location    = req.body.location || listing.location;
                listing.img         = req.body.img || listing.img;

                listing.save(err=>{
                    if(err){
                        return res.status(403).json({
                            message:"Failed to update listing: " + listing._id,
                            errors:err
                        });
                    } else {
                        return res.status(200).json(listing);
                    }
                });

            } else {
                return res.status(403).json({
                    message: "Listing does not exist",
                    errors:err
                });
            }
        })
    }

    destroy(req, res){

        //find the listing
        Listing.findOne({_id:req.params.id}, (err, listing)=>{
            if(listing){
                
                // remove the listing
                Listing.remove({_id:req.params.id}, (err)=>{
        
                    // if we can't find the listing, send the error
                    if(err){
                        return res.status(404).json({
                            message:"Failed to remove listing: " + req.params._id,
                            errors: err
                        });
        
                    // else return the listing(null, non existent)
                    } else {
                        return res.status(200).json(listing);
                    }
                });
                
            } else {
                return res.status(404).json({
                    message: "Failed to find listing: " + req.params.id,
                    errors: err
                });
            }     
        });
    }
}

module.exports = new ListingController();








module.exports = new ListingController();