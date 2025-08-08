import { Contact } from "../model/contactSchema.js";

// utils - sendMail
import { sendEmail } from "../utils/sendEmail.js";

export const sendMessage = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const rawData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  };

  try {
    await Contact.create(rawData);

    await sendEmail({
      to: process.env.GMAIL_USER,
      subject: "New Portfolio Message",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
        <h2 style="color: #0d6efd;">New Message from ${firstName} ${lastName}</h2>
        <p><strong>Sender Email: ${email}</strong></p>
        <p>${message}</p>
        </div>
        `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Error ${error.message}`,
    });
  }
};
