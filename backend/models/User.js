import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        age:{
            type: Number,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        avatar:{
            type: String,
        },
        balance:{
            type: Number,
            required: true
        },
        isVerified:{
            type: Boolean,
            default: false
        },
        phone:{
            type: String,
            required: true
        },
        refreshToken:{
            type: String,
        },
        refreshTokenExpiry:{
            type: Date,
        },
        emailVerificationToken:{
            type: String,
        },
        emailVerificationTokenExpiry:{
            type: Date,
        },
        // forgotPasswordToken:{
        //     type: String,
        // },
        // forgotPasswordTokenExpiry:{
        //     type: Date,
        // }
        catagory:{
            type: String,
            required: true
        },
        level:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        balance:{
            type: Number,
            required: true
        },

        
    },
    {
        
        timestamps: true
    }
);


userSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});



userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
};




userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};


userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};


export const User = mongoose.model("User", userSchema);
