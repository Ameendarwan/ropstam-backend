import { createTransport } from 'nodemailer';
import { renderFile } from 'ejs';
import { resolve } from 'path';

const FROM_EMAIL = 'Ameen Ropstam';
const templateDir = `${__dirname}/../templates/views/`;
const transporter = createTransport({
  //   host: 'email-smtp.eu-west-2.amazonaws.com',
  port: 587,
  secure: false,
  //   auth: {
  //     user: process.env.AWS_SES_USER,
  //     pass: process.env.AWS_SES_PASS,
  //   },
  tls: { port: 465, rejectUnauthorized: false },
});

const sendEmail = async (emailPayload) => {
  try {
    const html = await renderFile(
      resolve(templateDir, emailPayload.template),
      emailPayload.paramsToRender
    );
    const response = await transporter.sendMail({
      to: emailPayload.to,
      from: FROM_EMAIL,
      subject: emailPayload.subject,
      html,
    });
    return { success: response };
  } catch (e) {
    console.log('sendEmail service method error: ', e);
    return { failure: e };
  }
};

export { sendEmail };
