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

    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        console.log("Erro ao processar o formulário:", err);
        res
          .status(500)
          .json({ message: "Erro no processamento do formulário" });
        return;
      }

      console.log("Campos do formulário:", fields);
      if (
        !fields.name ||
        !fields.email ||
        !fields.company ||
        !fields.message ||
        !fields.phone ||
        !fields.cnpj ||
        !fields.carQuantity ||
        !fields.segmento
      ) {
        console.log(
          "Campos obrigatórios não encontrados no corpo da requisição"
        );
        res.status(400).json({
          message: "Campos obrigatórios não encontrados no corpo da requisição",
        });
        return;
      }

      // Dados do formulário
      const name = fields.name;
      const email = fields.email;
      const company = fields.company;
      const message = fields.message;
      const phone = fields.phone;
      const cnpj = fields.cnpj;
      const carQuantity = fields.carQuantity;
      const segmento = fields.segmento;

      // Envio para o RD Station
      try {
        const rdStationData = {
          event_type: "CONVERSION",
          event_family: "CDP",
          payload: {
            conversion_identifier: "formulario-site", // Identificador da conversão criado no RD Station
            name: name,
            email: email,
            empresa: company,
            mensagem: message,
            telefone: phone,
            cnpj: cnpj,
            quantidade_de_carros: carQuantity,
            segmento: segmento,
          },
        };

        await axios.post(
          `https://api.rd.services/platform/conversions`,
          rdStationData,
          {
            headers: {
              Authorization: `Bearer QwexONNiIMcqTWjBVzrGDVPxoqvgisMSkVIq`, // API Key do RD Station
            },
          }
        );

        console.log("Dados enviados ao RD Station com sucesso");

        // Envio do e-mail (opcional)
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USERNAME, // Seu endereço de e-mail
            pass: process.env.EMAIL_PASSWORD, // Sua senha ou token de app
          },
        });

        const mailOptions = {
          from: "diogaodieger@gmail.com",
          to: "comercial@lwtecnologia.com.br",
          subject: "Formulário de Contato",
          text: `
            Nome: ${name}
            Email: ${email}
            Empresa: ${company}
            Mensagem: ${message}
            Telefone: ${phone}
            CNPJ: ${cnpj}
            Quantidade de carros: ${carQuantity}
            Segmento: ${segmento}
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("E-mail do formulário de contato enviado com sucesso");
        res.status(200).json({
          message: "Dados enviados ao RD Station e e-mail enviado com sucesso!",
        });
      } catch (error) {
        console.error("Erro ao enviar dados ao RD Station:", error);
        res.status(500).json({ message: "Erro ao enviar dados ao RD Station" });
      }
    });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
