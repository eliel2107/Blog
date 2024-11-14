import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const formidable = require("formidable");

export const config = {
  api: {
    bodyParser: false, // Para permitir o uso do formidable
  },
};

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    console.log("Método não permitido");
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err: any, fields: any) => {
      if (err) {
        console.log("Erro ao processar o formulário:", err);
        res
          .status(500)
          .json({ message: "Erro no processamento do formulário" });
        return;
      }

      // Verificar se o campo email foi enviado
      if (!fields.email) {
        console.log("E-mail não encontrado no corpo da requisição");
        res
          .status(400)
          .json({ message: "E-mail não encontrado no corpo da requisição" });
        return;
      }

      const email = fields.email;

      try {
        // Configuração do transporte de e-mail
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST, // Use o host do seu serviço de e-mail (ex: 'smtp.office365.com')
          port: parseInt(process.env.SMTP_PORT || "587"), // Porta padrão, ajuste conforme necessário
          secure: process.env.SMTP_SECURE === "true", // true para SSL, false para TLS (587)
          auth: {
            user: process.env.EMAIL_USERNAME, // Usuário (e-mail)
            pass: process.env.EMAIL_PASSWORD, // Senha ou token de app
          },
          debug: true, // Habilita o log de depuração
        });

        const mailOptions = {
          from: process.env.EMAIL_USERNAME, // E-mail remetente
          to: "marketing@lwtecnologia.com.br", // Destinatário
          subject: "Inscrição de E-mail",
          text: `E-mail de inscrição: ${email}`,
        };

        // Envio do e-mail
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
