const mongo = require('mongoose');

mongo.connect("mongodb+srv://bhack902:CGbE8t9DononvEtL@cluster0.mweykpl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Database is Connected');
})
.catch((err)=>{
    console.log(err)
});