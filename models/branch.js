const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create sample schema
const BranchSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    branch_id: {
        type: String,
        required: true,
    },
});

module.exports = Branch = mongoose.model("branches", BranchSchema);
