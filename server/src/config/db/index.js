const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost/studing_dev');
        console.log('connect successfully');
    }
    catch(err) {
        console.log('connect failedly. Error: ',err);
    }

}

module.exports = {connect};