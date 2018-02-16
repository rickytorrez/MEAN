var mongoose    = require('mongoose');
var Player      = mongoose.model("Player");

class PlayerController {
    create(req, res){
        let player = new Player(req.body);

        player.save((err) => {
            if(err){
                return res.json(err);
            }
            return res.json(player);
        })
    }

    update(req, res){
        Player.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, player) => {
                if(err){
                    return res.json(err);
                }
                return res.json(player);
            })
    }

    destroy(req, res){
        Player.findByIdAndRemove(req.params.id, (err, player) => {
            if(err){
                return res.json(err);
            }
            return res.json(player);
        })
    }

    show(req, res){
        Player.find({}, (err, players) => {
            if(err){
                return res.json(err);
            }
            return res.json(players)
        })
    }

}

module.exports = new PlayerController()