"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displaySearchedProduct = exports.searchProductByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "u001",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "fulano123",
        createdAt: "01/02/2000"
    },
    {
        id: "u002",
        name: "Felipe",
        email: "felipe@gmail.com",
        password: "felipe123",
        createdAt: "01/02/2001"
    }
];
exports.products = [
    {
        id: "p001",
        name: "Banana",
        price: 12,
        description: "Uma banana bonita",
        imageUrl: "imagem de banana"
    },
    {
        id: "p002",
        name: "Maçã",
        price: 9,
        description: "Uma maçã deliciosa",
        imageUrl: "imagem de maçã"
    }
];
const createUser = (id, name, email, password, createdAt) => {
    const newUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: createdAt
    };
    exports.users.push(newUser);
    return console.log("Cadastro Realizado com sucesso");
};
exports.createUser = createUser;
const getAllUsers = () => {
    return console.log(`Os usuários da API são:`, exports.users);
};
exports.getAllUsers = getAllUsers;
const createProduct = (id, name, price, description, imageUrl) => {
    const newProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl
    };
    exports.products.push(newProduct);
    return console.log("Produto cadastrado com sucesso");
};
exports.createProduct = createProduct;
const getAllProducts = () => {
    return console.log("Todos os produtos disponíveis são:", exports.products);
};
exports.getAllProducts = getAllProducts;
const searchProductByName = (name) => {
    return exports.products.filter((product) => {
        return product.name.toLowerCase() === name;
    });
};
exports.searchProductByName = searchProductByName;
const displaySearchedProduct = () => {
    console.log("Produto encontrado:", (0, exports.searchProductByName)("batata"));
};
exports.displaySearchedProduct = displaySearchedProduct;
