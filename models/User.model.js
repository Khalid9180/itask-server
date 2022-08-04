const { Schema, model, default: mongoose } = require("mongoose");
const userSchema = new Schema({

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true 
    },
    password: { 
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Task'
  }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
