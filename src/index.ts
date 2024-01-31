import { appendFile } from "fs";
import { products, users, createUser, getAllUsers, createProduct, getAllProducts, searchProductByName, displaySearchedProduct } from "./database";
import  express, { Request, Response} from 'express'
import cors from 'cors';
import { TProduct } from "./types";

// Estrutura Express
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

// Fim da Estrutura Express

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
  }); 

app.get(`/users`, (req: Request, res: Response) => {
    res.send(users)
})

app.get(`/products`, (req: Request, res: Response) => {
    const productName = req.query.value as string;
  
    if (productName) {
      const foundProduct = products.find(
        (product) => product.name.toLowerCase() === productName.toLowerCase()
      );
  
      if (foundProduct) {
        return res.send(foundProduct);
      }
    }
    res.send(products);
  });

  app.post(`/users`, (req: Request, res: Response) => {
    const { id, name, email, password } = req.body;

    if (!id || !name || !email || !password) {
        return res.status(400).send("Missing required fields");
    }

    createUser(id, name, email, password, new Date().toISOString());

    res.status(201).send("User created successfully");
});

app.post(`/products`, (req: Request, res: Response) => {
  const { id, name, price, description, imageUrl } = req.body;

  if (!id || !name || !price || !description || !imageUrl) {
      return res.status(400).send("Missing required fields");
  }

  createProduct(id, name, price, description, imageUrl);

  res.status(201).send("Product created successfully");
});

app.delete(`/users/:id`, (req: Request, res: Response) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
      return res.status(404).send("User not found");
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  res.send(`User with ID ${deletedUser.id} deleted successfully`);
});

app.delete(`/products/:id`, (req: Request, res: Response) => {
  const productId = req.params.id;

  const productIndex = products.findIndex(product => product.id === productId);

  if (productIndex === -1) {
      return res.status(404).send("Product not found");
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  res.send(`Product with ID ${deletedProduct.id} deleted successfully`);
});

app.put(`/products/:id`, (req: Request, res: Response) => {
  const productId = req.params.id;
  const { name, price, description, imageUrl } = req.body
  
  const productIndex = products.findIndex(product => product.id === productId);

  if (productIndex === -1) {
      return res.status(404).send("Product not found");
  }

  products[productIndex] = {
      ...products[productIndex],
      name: name || products[productIndex].name,
      price: price || products[productIndex].price,
      description: description || products[productIndex].description,
      imageUrl: imageUrl || products[productIndex].imageUrl,
  };
  console.log("Request Body:", req.body);
  res.send(`Product with ID ${productId} updated successfully`);
});