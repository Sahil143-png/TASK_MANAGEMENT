import mongoose from "mongoose";


const userSchema = new mongoose.Schema(

{

    name:{

        type:String,

        required:true,

        trim:true

    },


    email:{

        type:String,

        required:true,

        unique:true,

        lowercase:true

    },


    firebaseUID:{

        type:String,

        unique:true

    },


    avatar:{

        type:String,

        default:""

    },


    createdAt:{

        type:Date,

        default:Date.now

    }


},

{
    timestamps:true
}

);



const User = mongoose.model(
    "User",
    userSchema
);



export default User;