ChatGPT
E-commerce API

This is a simple E-commerce API built using Node.js, Express.js, and MongoDB (Mongoose) that allows you to manage products.
Prerequisites

Before running the API, make sure you have the following installed on your local system:

    Node.js (https://nodejs.org)
    MongoDB (https://www.mongodb.com/try/download/community)

Getting Started

    Clone the repository:

bash

git clone https://github.com/your-username/e-commerce-api.git
cd e-commerce-api

    Install the dependencies:

npm install

    Start the MongoDB server:

Make sure MongoDB is installed on your system, and start the MongoDB server by running the following command in your terminal:

mongod

    Start the API:

sql

npm start

The API will be running at http://localhost:9000.
API Endpoints

    GET /products - Get all products
    POST /products/create - Create a new product (send data in request body)
    POST /products/:id/update_quantity?number=10 - Update the quantity of a product by incrementing or decrementing (send quantity value in query parameter)
    DELETE /products/:id - Delete a product by ID

API Usage
Create a new product

Send a POST request to /products/create with the following data in the request body:

json

{
  "id": "1",
  "name": "Laptop",
  "quantity": 10
}

Update the quantity of a product

Send a POST request to /products/:id/update_quantity?number=10 to update the quantity of a product with ID :id. Replace :id with the actual product ID you want to update, and set the number query parameter to the quantity value you want to add or subtract. For example, to increment the quantity of the product with ID 1 by 5, you would send the following request:

bash

POST /products/1/update_quantity?number=5

Delete a product

Send a DELETE request to /products/:id to delete a product by ID. Replace :id with the actual product ID you want to delete. For example, to delete the product with ID 1, you would send the following request:

bash

DELETE /products/1

Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.