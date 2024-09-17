import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";
const formidable = require("formidable");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function SendContactForm(
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

      const {
        name,
        email,
        phone,
        message,
        company,
        segmento,
        cnpj,
        carQuantity,
      } = fields;

      if (
        !name ||
        !email ||
        !company ||
        !message ||
        !phone ||
        !cnpj ||
        !carQuantity ||
        !segmento
      ) {
        console.log(
          "Campos obrigatórios não encontrados no corpo da requisição"
        );
        res.status(400).json({
          message: "Campos obrigatórios não encontrados no corpo da requisição",
        });
        return;
      }

      console.log(carQuantity, "carQuantity");

      // Envio para o RD Station
      const rdStationData = {
        event_type: "CONVERSION",
        event_family: "CDP",
        payload: {
          conversion_identifier: "formulario-site",
          name,
          email,
          personal_phone: phone,
          cf_nome_da_empresa: company,
          cf_cnpj: cnpj,
          cf_segmento_0: segmento,
          cf_quantos_veiculos: [carQuantity],
          cf_mensagem: message,
        },
      };

      console.log(rdStationData);

      try {
        await axios.post(
          `https://api.rd.services/platform/conversions?api_key=${process.env.RD_STATION_API_KEY}`,
          rdStationData
        );
        console.log("Dados enviados ao RD Station com sucesso");
      } catch (error: any) {
        console.error(
          "Erro ao enviar dados ao RD Station:",
          error.response ? error.response.data : error.message
        );
        res.status(500).json({ message: "Erro ao enviar dados ao RD Station" });
        return;
      }

      // Envio do e-mail
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST, // e.g., 'smtp.office365.com' ou 'smtp.gmail.com'
          port: Number(process.env.SMTP_PORT) || 587, // Converte o valor da porta para número
          secure: process.env.SMTP_SECURE === "true", // Se for 465, utilize `true`
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USERNAME,
          to: "comercial@lwtecnologia.com.br",
          subject: "Formulário de Contato",
          text: `
            Nome: ${name}
            Email: ${email}
            Telefone: ${phone}
            Empresa: ${company} 
            CNPJ: ${cnpj}
            Segmento: ${segmento}
            Mensagem: ${message}
            Quantidade de carros: ${carQuantity}
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("E-mail do formulário de contato enviado com sucesso");
        res.status(200).json({
          message: "Dados enviados ao RD Station e e-mail enviado com sucesso!",
        });
      } catch (error: any) {
        console.error("Erro ao enviar e-mail do formulário de contato:", error);
        res.status(500).json({
          message: "Erro ao enviar e-mail do formulário de contato",
        });
      }
    });
  } catch (error: any) {
    console.error("Erro na API:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
