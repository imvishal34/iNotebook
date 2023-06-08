const mongoose= require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/inotebook?directConnection=true"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo successfully")
    })
}
mongoose.set('strictQuery', true);
module.exports=connectToMongo;