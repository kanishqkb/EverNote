const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


const connectTOmongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("CONNECTED TO MONGO SUCCESSFULLY");
    })
}
module.exports=connectTOmongo;


// mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false