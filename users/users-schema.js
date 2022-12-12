import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, unique: true, required: false },
    firstName: { type: String, unique: false, required: true },
    lastName: { type: String, unique: false, required: true },
    role: { type: String, enum: ["Admin", "Subscriber"] },
  },
  { collection: "users" }
);

export default usersSchema;
