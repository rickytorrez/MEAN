var mongoose    = require('mongoose'),
    db_name     = "notes_db";

mongoose.connect(`mongodb://localhost/${db_name}`);

