import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 9000;

app.use(express.json());

app.post('/clientes', async (req, res) => {
    try {
        const { nome, cep, endereco, complemento, bairro, cidade, uf, celular, email } = req.body;
        const cliente = await prisma.clientes.create({
            data: {
                nome,
                cep,
                endereco,
                complemento,
                bairro,
                cidade,
                uf,
                celular,
                email,
            }
        });
        res.json(cliente);
    } catch (error) {
        res.status(400).json(error)
    }
});

app.get('/clientes', async (req, res) => {
    const cliente = await prisma.clientes.findMany();
    res.json(cliente);
});

app.get('/clientes/:id', async (req, res) => {
    try {
        const clientesId = parseInt(req.params.id);
        const cliente = await prisma.clientes.findUnique({
            where: {
                id: clientesId,
            },
        });

        if (clientesId) {
            res.json(cliente);
        } else {
            console.log('Cliente não encontrado');
        }
    } catch (error) {
        console.error('Erro ao obter cliente:', error);
    }
});

app.put('/clientes/:id', async (req, res) => {

    const clientesId = parseInt(req.params.id, 10);
    const { nome, cep, endereco, complemento, bairro, cidade, uf, celular, email } = req.body;
    const cliente = await prisma.clientes.update({
        where: { id: clientesId },
        data: {
            nome,
            cep,
            endereco,
            complemento,
            bairro,
            cidade,
            uf,
            celular,
            email,
        },
    });
    res.json(cliente);
});

app.delete('/clientes/:id', async (req, res) => {
    const clientesId = parseInt(req.params.id, 10);
    const cliente = await prisma.clientes.delete({
        where: { id: clientesId },
    });
    res.json(cliente);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});