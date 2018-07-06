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

    }

    findById(req, res){

    }

    update(req, res){

    }

    destroy(req, res){

    }

}

module.exports = new ListingController();








module.exports = new ListingController();