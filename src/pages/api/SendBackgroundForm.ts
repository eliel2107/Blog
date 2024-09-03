import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";
const formidable = require("formidable");

type CarQuantityOptions =
  | "Até 500"
  | "De 501 à 1.000"
  | "De 1.001 à 10.000"
  | "Acima de 10.000";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function SendBackgroundForm(
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

      if (
        !fields.nome ||
        !fields.telefone ||
        !fields.mensagem ||
        !fields.email ||
        !fields.enterprise ||
        !fields.segmento ||
        !fields.cnpj ||
        !fields.carQuantity
      ) {
        console.log(
          "Campos obrigatórios não encontrados no corpo da requisição"
        );
        res.status(400).json({
          message: "Campos obrigatórios não encontrados no corpo da requisição",
        });
        return;
      }

      const nome = fields.nome;
      const email = fields.email;
      const telefone = fields.telefone;
      const mensagem = fields.mensagem;
      const enterprise = fields.enterprise;
      const segmento = fields.segmento;
      const cnpj = fields.cnpj;
      const carQuantity = fields.carQuantity as CarQuantityOptions;

      // Correctly map the carQuantity options to a valid bitfield array
      const carQuantityOptions: Record<CarQuantityOptions, number[]> = {
        "Até 500": [1, 0, 0, 0],
        "De 501 à 1.000": [0, 1, 0, 0],
        "De 1.001 à 10.000": [0, 0, 1, 0],
        "Acima de 10.000": [0, 0, 0, 1],
      };

      const rdStationData = {
        event_type: "CONVERSION",
        event_family: "CDP",
        payload: {
          conversion_identifier: "formulario-site",
          name: nome,
          email: email,
          personal_phone: telefone,
          cf_nome_da_empresa: enterprise,
          cf_cnpj: cnpj,
          cf_segmento_0: segmento,
          cf_quantos_veiculos: [carQuantity],
          cf_mensagem: mensagem,
        },
      };

      try {
        const response = await axios.post(
          `https://api.rd.services/platform/conversions?api_key=QwexONNiIMcqTWjBVzrGDVPxoqvgisMSkVIq`,
          rdStationData
        );
      } catch (error: any) {
        console.error(
          "Erro ao enviar dados ao RD Station:",
          error.response ? error.response.data : error.message
        );
      }

      // Envio do e-mail (opcional)
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
          to: "comercial@lwtecnologia.com.br",
          subject: "Formulário de Contato",
          text: `
            Nome: ${nome}
            Email: ${email}
            Telefone: ${telefone}
            Empresa: ${enterprise} 
            Cnpj: ${cnpj}
            Segmento: ${segmento}
            Mensagem: ${mensagem}
            Quantidade de carros: ${carQuantity}
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("E-mail do formulário de background enviado com sucesso");
        res.status(200).json({
          message: "Dados enviados ao RD Station e e-mail enviado com sucesso!",
        });
      } catch (error) {
        console.error(
          "Erro ao enviar e-mail do formulário de background:",
          error
        );
        res.status(500).json({
          message: "Erro ao enviar e-mail do formulário de background",
        });
      }
    });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
