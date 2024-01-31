import { TProduct, TUser } from "./types";

export const users: TUser[] = [
{
    id: "u001",
    name: "Fulano",
    email: "fulano@gmail.com",
    password: "fulano123",
    createdAt: new Date().toISOString()
},

{
    id: "u002",
    name: "Felipe",
    email: "felipe@gmail.com",
    password: "felipe123",
    createdAt: new Date().toISOString()
}
];

export const products: TProduct[] = [
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


export const createUser = (id: string,
    name: string,
    email: string,
    password: string,
    createdAt: string): void => {
        const newUser: TUser = {
            id: id,
            name: name,
            email: email,
            password: password,
            createdAt: createdAt
        };
        users.push(newUser);
        return console.log("Cadastro Realizado com sucesso")
    };

    export const getAllUsers = (): void => {
        return console.log(`Os usuários da API são:`, users)
    };

    export const createProduct = (id: string,
        name: string,
        price: number,
        description: string,
        imageUrl: string): void => {
            const newProduct: TProduct = {
                id: id,
                name: name,
                price: price,
                description: description,
                imageUrl: imageUrl
            };
            products.push(newProduct)
            return console.log("Produto cadastrado com sucesso")
        }

        export const getAllProducts = (): void => {
            return console.log("Todos os produtos disponíveis são:", products)
        };

        export const searchProductByName = (name: string) => {
            return products.filter((product) => {
                return product.name.toLowerCase() === name;
            })
        }

        export const displaySearchedProduct = () => {
            console.log("Produto encontrado:", searchProductByName("batata"))
        }

        