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

      // Inicializa a variável attachments como um array vazio
      const attachments: { filename: any; path: any }[] = [];

      // Se você está esperando um arquivo chamado 'curriculo'
      if (files.curriculo) {
        // Pode ser um único arquivo ou um array de arquivos
        const curriculos = Array.isArray(files.curriculo)
          ? files.curriculo
          : [files.curriculo];

        // Adiciona cada arquivo ao array de attachments
        curriculos.forEach((file: { originalFilename: any; filepath: any }) => {
          if (file.originalFilename) {
            attachments.push({
              filename: file.originalFilename,
              path: file.filepath,
            });
          }
        });
      }

      // Lógica para processar campos e arquivos
      console.log("Campos:", fields);
      console.log("Arquivos:", files);

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",

          auth: {
            user: process.env.EMAIL_USERNAME, // Seu endereço de e-mail
            pass: process.env.EMAIL_PASSWORD, // Sua senha ou token de app
          },
          debug: true, // Isso habilita o modo de depuração, se necessário
        });

        const mailOptions = {
          from: "diogaodieger@gmail.com", // Substitua pelo seu e-mail
          to: "comercial@lwtecnologia.com.br", // Substitua pelo e-mail de destino
          subject: "Novo Cadastro do Formulário",
          text: `Dados do Formulário: ${JSON.stringify(fields)}`,
          attachments: attachments,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email enviado com sucesso");
        res.status(200).json({ message: "Email enviado com sucesso!" });
      } catch (error) {
        console.error("Erro ao enviar email:", error);
        res.status(500).json({ message: "Erro ao enviar email" });
      }
    });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
