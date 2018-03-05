var mongoose        = require("mongoose");
var Note            = mongoose.model("Note");

class NoteController {
    create( req, res ){
        let note = new Note(req.body);
        note.save((err) => {
            if(err){
                console.log("error in note BE controller" + err);
                return res.json(err);
            }
                console.log("success in note BE controller");
            return res.json(note);
        })
    }

    display( req, res ){
        Note.find({}, (err, notes) => {
            if(err){
                console.log("error in the display BE controller" + err);
                return res.json(err);
            }
            return res.json(notes)
        })
    }

    displayOne( req, res ){
        Note.findById(req.params.id, (err, note) => {
            if(err){
                return res.json(err);
            }
            return res.json(note);
        })
    }
}

module.exports      = new NoteController()