-- Tabelas

CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT UNIQUE NOT NULL
);

INSERT INTO users (id, name, email, password, created_at)
VALUES
    ('u001', 'Fulano', 'fulanoemail', '12345', '02/11/2023'),
    ('u002', 'Ciclano', 'ciclanoemail', '02034', '01/03/2023'),
    ('u003', 'Booleano', 'booleanoemail', '04053', '04/11/2023');

CREATE TABLE products (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

INSERT INTO products (id, name, price, description, image_url)
VALUES
    ('p001','Maçã','R$15,00','Maça legal','Imagem de maçã'),
    ('p002','Batata','R$20,00','Batata bonita','Imagem de batata'),
    ('p003','Jaca','R$5,00','Jaca daora','Imagem de jaca'),
    ('p004','Pêra','R$10,00','Pêra verde','Imagem de pêra'),
    ('p005','Maracujá','R$30,00','Maracujá de ouro legal','Imagem de maracujá');

CREATE TABLE purchases (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    buyer TEXT NOT NULL,
    total_price TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (buyer) REFERENCES buyer(id)
);

INSERT INTO purchases (id, buyer, total_price, created_at)
VALUES
    ('c001', 'u002', 'R$30', '02/06/23'),
    ('c002', 'u003', 'R$20', '03/02/23'),
    ('c003', 'u001', 'R$10', '01/04/23');

SELECT
    purchases.total_price,
    users.name
FROM
    purchases
    inner JOIN users ON purchases.buyer = users.id;

UPDATE purchases
SET
    total_price = 'R$500'
WHERE
    id = 'c002';

CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    products_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (products_id) REFERENCES products(id)

);

INSERT INTO purchases_products (purchase_id, products_id, quantity)
VALUES
    ('c001','p001',2),
    ('c002','p004',2),
    ('c003','p003',2);

SELECT 
 purchases_products.purchase_id AS id_compra,
    purchases.buyer AS id_comprador,
    purchases.total_price AS preco_total,
    purchases.created_at AS data_compra,
    products.id AS id_produto,
    products.name AS nome_produto,
    products.price AS preco_produto,
    products.description AS descricao_produto,
    products.image_url AS url_imagem_produto,
    purchases_products.quantity AS quantidade
FROM purchases_products
INNER JOIN purchases ON purchases_products.purchase_id = purchases.id
INNER JOIN products ON purchases_products.products_id = products.id;

