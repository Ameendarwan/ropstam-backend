import { createTransport } from 'nodemailer';

const FROM_EMAIL = 'ameen.darwan@wearenova.co.uk';
const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'ameen.darwan@wearenova.co.uk',
    pass: 'uieykabfsrgrjpph',
  },
  requireTLS: false,
  // tls: { port: 465, rejectUnauthorized: false },
});

const sendEmail = async (emailPayload) => {
  try {
    const response = await transporter.sendMail({
      to: emailPayload.to,
      from: FROM_EMAIL,
      subject: emailPayload.subject,
      text: emailPayload.text,
    });
    return { success: response };
  } catch (e) {
    console.log('sendEmail service method error: ', e);
    return { failure: e };
  }
};

export { sendEmail };
