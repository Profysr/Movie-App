import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "It is Required"],
    },
    email: {
      type: String,
      required: [true, "It is required"],
    },
    phoneNo: String,
    message: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contacts || mongoose.model("Contact", ContactSchema);

export default Contact;
