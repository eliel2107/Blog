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

      // Verifica se o corpo da requisição contém as propriedades necessárias
      if (
        !fields.nome ||
        !fields.telefone ||
        !fields.mensagem ||
        !fields.email
      ) {
        console.log(
          'Campos obrigatórios não encontrados no corpo da requisição'
        );
        res
          .status(400)
          .json({
            message:
              'Campos obrigatórios não encontrados no corpo da requisição',
          });
        return;
      }

      // Lógica para processar o e-mail do formulário do background
      const nome = fields.nome;
      const email = fields.email;
      const telefone = fields.telefone;
      const mensagem = fields.mensagem;

      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',

          auth: {
            user: process.env.EMAIL_USERNAME, // Seu endereço de e-mail
            pass: process.env.EMAIL_PASSWORD, // Sua senha ou token de app
          },
          debug: true, // Isso habilita o modo de depuração, se necessário
        });

        const mailOptions = {
          from: 'diogaodieger@gmail.com', // Substitua pelo seu e-mail
          to: 'ddiegerfernandes@gmail.com', // Substitua pelo e-mail de destino
          subject: 'Formulário de Background',
          text: `
            Nome: ${nome}
            Email: ${email}
            Telefone: ${telefone}
            Mensagem: ${mensagem}
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('E-mail do formulário de background enviado com sucesso');
        res
          .status(200)
          .json({
            message: 'E-mail do formulário de background enviado com sucesso!',
          });
      } catch (error) {
        console.error(
          'Erro ao enviar e-mail do formulário de background:',
          error
        );
        res
          .status(500)
          .json({
            message: 'Erro ao enviar e-mail do formulário de background',
          });
      }
    });
  } catch (error) {
    console.error('Erro na API:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
