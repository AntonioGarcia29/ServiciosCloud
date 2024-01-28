const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  tipo: String,
  estado: String,
});

const Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;
