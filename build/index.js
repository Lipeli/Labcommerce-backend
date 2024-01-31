"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Estrutura Express
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
// Fim da Estrutura Express
app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get(`/users`, (req, res) => {
    res.send(database_1.users);
});
app.get(`/products`, (req, res) => {
    const productToFind = req.query.name;
    const result = database_1.products.filter((product) => {
        return product.name.toLowerCase().includes(productToFind.toLowerCase());
    });
    if (result === undefined) {
        res.send(database_1.products);
    }
});
