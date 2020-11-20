
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const usersSchema = new Schema({
   name: String,
   email: String
})

const usersModel = mongoose.model('users', usersSchema, 'users');
export default usersModel;
