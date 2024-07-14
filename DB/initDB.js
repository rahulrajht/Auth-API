const mongoose = require('mongoose');

const initDB = mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority',
      wtimeout: 2500
    }})
.then(()=> console.log("db connected"))
.catch(err => console.log(err))

module.exports = initDB