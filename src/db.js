const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase')
    .then(db => console.log('Mondongo is connected to ', db.connection.host))
    .catch(error => console.error('Error connecting to Mondongo:', error));

    