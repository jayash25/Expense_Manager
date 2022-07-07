// const mongoose = require('mongoose');

// const conn =()=>{
//     mongoose.connect(process.env.REACT_APP_ATLAS_URI,()=>{
//         console.log("he he he he ho giya");
//     });
// }
// module.exports = conn;

const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URI)
        .then(db => {
            console.log("connect ho gya party");
            return db;
        }).catch(err => {
            console.log("Connection Error");
        })

module.exports = conn;