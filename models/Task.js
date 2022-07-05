const mongoose = require("mongoose");
// const { boolean } = require("webidl-conversions");

const TaskSchema = {
    name: {
        type: String,
        required: [true, "Name field should be provided"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}

module.exports = mongoose.model("Task", TaskSchema);