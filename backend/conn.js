const mongoose=require('mongoose');
const connection_string=process.env.CONNECTION;
mongoose.connect(connection_string,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log('Connection succesfull')}).catch((err)=>{console.log(err)})
