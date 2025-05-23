import type { NextApiRequest, NextApiResponse } from "next";
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
        !fields.email ||
        !fields.enterprise ||
        !fields.segmento ||
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
      const enterprise = fields.enterprise;
      const segmento = fields.segmento;
      const carQuantity = fields.carQuantity as CarQuantityOptions;

      console.log(carQuantity);

      const rdStationData = {
        event_type: "CONVERSION",
        event_family: "CDP",
        payload: {
          conversion_identifier: "LP Produtos",
          name: nome,
          email: email,
          personal_phone: telefone,
          company_name: enterprise,
          cf_segmento_0: segmento,
          cf_quantos_veiculos: [carQuantity],
        },
      };

      try {
        console.log("Enviando dados ao RD Station...");
        const response = await axios.post(
          `https://api.rd.services/platform/conversions?api_key=fkidlIhSekYJYxaXLqENeubCVgChGqkQjcfQ`,
          rdStationData,
          {
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
          }
        );
        console.log("Dados enviados ao RD Station:", response.data);
        res.status(200).json({ message: "Dados enviados com sucesso" });
      } catch (error: any) {
        console.error(
          "Erro ao enviar dados ao RD Station:",
          error.response ? error.response.data : error.message
        );
        res.status(500).json({ message: "Erro ao enviar dados ao RD Station" });
      }
    });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
