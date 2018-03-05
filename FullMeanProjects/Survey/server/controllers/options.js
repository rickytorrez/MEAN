const mongoose      = require('mongoose');
const Option    = mongoose.model('Option');

class OptionsController {
    update(req, res){
        Option.findByIdAndUpdate(req.params.id, {$inc: { votes: 1 } }, { new: true }, (err, option)=> {
            if(err){
                return res.json(err);
            }
            return res.json(option);
        })
    }
    updateEasy(req, res){
        Option.findById(req.params.id, (err, option) => {
            if(err){
                return res.json(err);
            }
            option.vote++;
            option.save((err, option) => {
                if(err){
                    return res.json(err);
                }
                return res.json(option);
            })
        })
    }
    show(req, res){
        Option.findById(req.params.id, (err, option) => {
            if(err){
                return res.json(err);
            }
            return res.json(option);
        })
    }
}

module.exports = new OptionsController();
