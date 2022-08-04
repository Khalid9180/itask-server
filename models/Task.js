const { Schema, model, default: mongoose } = require("mongoose");

const TaskSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        completed: {
            type: Boolean,
            default: false
        },
        date: {
            type: Date,
            default: Date.now
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, ref:'User',
            required: true
        }
},
{timestamps: true}   
)

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task; 

