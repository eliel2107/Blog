import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const formidable = require("formidable");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    console.log("Método não permitido");
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        console.log("Erro ao processar o formulário:", err);
        res
          .status(500)
          .json({ message: "Erro no processamento do formulário" });
        return;
      }
      if (!fields.email) {
        console.log("E-mail não encontrado no corpo da requisição");
        res
          .status(400)
          .json({ message: "E-mail não encontrado no corpo da requisição" });
        return;
      }

      const email = fields.email;

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",

          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
          debug: true,
        });

        const mailOptions = {
          from: "diogaodieger@gmail.com",
          to: "marketing@lwtecnologia.com.br",
          subject: "Inscrição de E-mail",
          text: `E-mail de inscrição: ${email}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("E-mail de inscrição enviado com sucesso");
        res
          .status(200)
          .json({ message: "E-mail de inscrição enviado com sucesso!" });
      } catch (error) {
        console.error("Erro ao enviar e-mail de inscrição:", error);
        res.status(500).json({ message: "Erro ao enviar e-mail de inscrição" });
      }
    });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
