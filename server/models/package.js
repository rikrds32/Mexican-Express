const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
    savedPackages: [bookSchema],
    }
)


const Package = model('Package', userSchema);

module.exports = User;