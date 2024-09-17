import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const formidable = require("formidable");

export const config = {
  api: {
    bodyParser: false, // Desabilita o bodyParser padrão do Next.js para lidar com uploads de arquivos
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

    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        console.log("Erro ao processar o formulário:", err);
        res
          .status(500)
          .json({ message: "Erro no processamento do formulário" });
        return;
      }

      // Inicializa a variável attachments como um array vazio
      const attachments: { filename: string; path: string }[] = [];

      // Se você está esperando um arquivo chamado 'curriculo'
      if (files.curriculo) {
        const curriculos = Array.isArray(files.curriculo)
          ? files.curriculo
          : [files.curriculo];

        curriculos.forEach(
          (file: { originalFilename: string; filepath: string }) => {
            if (file.originalFilename) {
              attachments.push({
                filename: file.originalFilename,
                path: file.filepath,
              });
            }
          }
        );
      }

      // Lógica para processar campos e arquivos
      console.log("Campos:", fields);
      console.log("Arquivos:", files);

      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST, // Se for necessário, adicione o host, ex: 'smtp.office365.com'
          port: Number(process.env.SMTP_PORT) || 587, // Porta SMTP, 587 geralmente para TLS
          secure: process.env.SMTP_SECURE === "true", // false para STARTTLS, true para SSL
          auth: {
            user: process.env.EMAIL_USERNAME, // Seu endereço de e-mail
            pass: process.env.EMAIL_PASSWORD, // Sua senha ou token de app
          },
          debug: true, // Isso habilita o modo de depuração
        });

        const mailOptions = {
          from: process.env.EMAIL_USERNAME, // Substitua pelo seu e-mail
          to: "comercial@lwtecnologia.com.br", // Substitua pelo e-mail de destino
          subject: "Novo Cadastro do Formulário",
          text: `Dados do Formulário:\nNome: ${fields.nome}\nEmail: ${fields.email}\nTelefone: ${fields.telefone}\nMensagem: ${fields.mensagem}`,
          attachments: attachments, // Anexa os arquivos
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
