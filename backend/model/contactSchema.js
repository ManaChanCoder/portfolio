import moongose from "mongoose";

const contactSchema = new moongose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Contact = moongose.model("Contact", contactSchema);
