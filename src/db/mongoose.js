import {mongoose} from 'mongoose'

export const connectDb = async() =>{
    try{        
        await mongoose.connect(process.env.DB_CONN_URL,      
            {});
        console.log("DB connected successfully")
    }catch(error){
        console.log(error,"error in db connection")
    }
}
