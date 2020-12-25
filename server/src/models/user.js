import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UsersSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

UsersSchema.statics.findByUserId = function (userId) {
  return this.findOne({ userId });
};

UsersSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.password = hash;
};
UsersSchema.methods.checkPassword = async function (passwords) {
  const result = await bcrypt.compare(passwords, this.password);
  return result;
};
UsersSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      userId: this.userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 3600,
    }
  );
  return token;
};

UsersSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.password;
  return data;
};

const User = mongoose.model('User', UsersSchema);
export default User;
