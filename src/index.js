"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = 9000;
app.use(express_1.default.json());
app.post('/clientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, cep, endereco, complemento, bairro, cidade, uf, celular, email } = req.body;
    const cliente = yield prisma.clientes.create({
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
}));
app.get('/clientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cliente = yield prisma.clientes.findMany();
    res.json(cliente);
}));
app.put('/clientes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientesId = parseInt(req.params.id, 10);
    const { nome, cep, endereco, complemento, bairro, cidade, uf, celular, email } = req.body;
    const cliente = yield prisma.clientes.update({
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
}));
app.delete('/clientes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientesId = parseInt(req.params.id, 10);
    const cliente = yield prisma.clientes.delete({
        where: { id: clientesId },
    });
    res.json(cliente);
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
