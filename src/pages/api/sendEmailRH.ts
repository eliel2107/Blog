import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const formidable = require("formidable");

export const config = {
  api: {
    bodyParser: false, // Necessário para lidar com arquivos
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

      // Verifica se há arquivo anexado no campo 'curriculo'
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

      // Exibir os campos e os arquivos recebidos
      console.log("Campos recebidos:", fields);
      console.log("Arquivos anexados:", files);

      try {
        // Criação do transporte para envio de e-mail
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST, // Se necessário, configure o host do serviço SMTP
          port: parseInt(process.env.SMTP_PORT || "587"), // Use a porta correta para o serviço SMTP (587 para TLS)
          secure: process.env.SMTP_SECURE === "true", // true para SSL, false para TLS
          auth: {
            user: process.env.EMAIL_USERNAME, // Usuário do SMTP (endereço de e-mail)
            pass: process.env.EMAIL_PASSWORD, // Senha ou token de app
          },
          debug: true, // Habilitar logs para depuração
        });

        // Configurações do e-mail
        const mailOptions = {
          from: process.env.EMAIL_USERNAME, // Remetente do e-mail
          to: "lwlover@lwtecnologia.com.br", // Destinatário
          subject: "Novo Cadastro do Formulário",
          text: `Dados do Formulário: ${JSON.stringify(fields, null, 2)}`, // Formatação dos campos no corpo do e-mail
          attachments: attachments, // Anexos
        };

        // Enviar e-mail
        await transporter.sendMail(mailOptions);
        console.log("E-mail enviado com sucesso");
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
