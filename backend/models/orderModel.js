import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        Ref:"User"
    },
    orderItems:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            image:{type:String, required:true},
            price:{type:String, required:true},
            prod:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"Product"},
        }
    ],
    shippingAddress: {
        addresses: {type:String, required:true},
        city: {type:String, required:true},
        postalCode: {type:String, required:true},
        country: {type:String, required:true},
    },
    paymentMethod: {
        type: String,
        require:true,
    },
    paymentResult: {
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String},
    },
    taxPrice: {
        type: Number,
        require:true,
        default:0.0
    },
    taxPrice: {
        type: Number,
        require:true,
        default:0.0
    },
    shippingPrice: {
        type: Number,
        require:true,
        default:0.0
    },
    isPaid: {
        type: Boolean,
        require:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDeliveredAt:{
        type:Date
    }

},{
    timestamps:true,
})
const Order=mongoose.model('Order', oderSchema)
export default Order