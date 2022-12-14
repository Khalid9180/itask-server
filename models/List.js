const { Schema, model, default: mongoose } = require("mongoose");

const ListSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Task'
}],
user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
},
},
{timestamps: true}   
)

const List = mongoose.model('List', ListSchema);
module.exports = List; 


