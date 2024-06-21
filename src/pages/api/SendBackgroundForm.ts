import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
const formidable = require('formidable');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function SendBackgroundForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    console.log('Método não permitido');
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        console.log('Erro ao processar o formulário:', err);
        res
          .status(500)
          .json({ message: 'Erro no processamento do formulário' });
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
          'Campos obrigatórios não encontrados no corpo da requisição'
        );
        res.status(400).json({
          message: 'Campos obrigatórios não encontrados no corpo da requisição',
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
      const carQuantity = fields.carQuantity;
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',

          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
          debug: true,
        });

        const mailOptions = {
          from: 'diogaodieger@gmail.com',
          to: 'comercial@lwtecnologia.com.br',
          subject: 'Formulário de Contato',
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
        console.log('E-mail do formulário de background enviado com sucesso');
        res.status(200).json({
          message: 'E-mail do formulário de background enviado com sucesso!',
        });
      } catch (error) {
        console.error(
          'Erro ao enviar e-mail do formulário de background:',
          error
        );
        res.status(500).json({
          message: 'Erro ao enviar e-mail do formulário de background',
        });
      }
    });
  } catch (error) {
    console.error('Erro na API:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
