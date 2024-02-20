const mongoose = require('mongoose')
// process.env is used to import env file
const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Atlas connected successfully with pf server");
}).catch((reason)=>{
    console.log(reason);
    console.log("Mongodb connected failed!!!!");
})