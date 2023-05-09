import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const Schema= mongoose.Schema;
const SharesSchema=new Schema({
    postID:{type:ObjectId,required:true},
    userID:{type:ObjectId,required:true}
},{timestamps:true});
const Shares=mongoose.model('Shares',SharesSchema);
export default Shares;