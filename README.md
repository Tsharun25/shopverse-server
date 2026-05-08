# ShopVerse Backend Documentation

## Project Overview

ShopVerse backend is a Node.js + Express + MongoDB REST API for a MERN e-commerce platform.

The backend currently includes:

- Express server
- MongoDB Atlas connection
- User authentication
- JWT authorization
- Role-based admin access
- Product CRUD APIs
- Protected routes

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors
- cookie-parser
- nodemon

---

## Folder Structure

```txt
server/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── .env
```

---

## Installed Packages

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken cookie-parser
npm install -D nodemon
```

---

## Environment Variables

File:

```txt
server/src/.env
```

Required values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string/shopverse
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Important:

- Do not push `.env` to GitHub.
- Use database name `shopverse` to keep this project separate from other projects.
- If using MongoDB Atlas and SRV causes DNS issues, use the non-SRV `mongodb://...` connection string.

---

## Run Backend

```bash
cd D:\shopverse\server
npm run dev
```

Expected console output:

```txt
Server running on port 5000
MongoDB Connected: ...
```

Backend URL:

```txt
http://localhost:5000
```

Test route:

```txt
GET /
```

Expected response:

```json
{
  "success": true,
  "message": "ShopVerse API is running"
}
```

---

## Database

MongoDB database name:

```txt
shopverse
```

Current collections:

```txt
users
products
```

---

## User Model

File:

```txt
src/models/User.js
```

Fields:

```txt
name
email
password
role
avatar
timestamps
```

Roles:

```txt
user
admin
```

Default role:

```txt
user
```

---

## Product Model

File:

```txt
src/models/Product.js
```

Fields:

```txt
name
description
price
oldPrice
category
image
stock
featured
timestamps
```

---

## Authentication API

Base route:

```txt
/api/auth
```

### Register

```txt
POST /api/auth/register
```

Body:

```json
{
  "name": "Harun",
  "email": "harun@gmail.com",
  "password": "123456"
}
```

Returns:

```txt
token
user
```

---

### Login

```txt
POST /api/auth/login
```

Body:

```json
{
  "email": "harun@gmail.com",
  "password": "123456"
}
```

Returns:

```txt
token
user
```

---

## User API

Base route:

```txt
/api/user
```

### Current User / Protected Test

```txt
GET /api/user/me
```

Header:

```txt
Authorization: Bearer <token>
```

---

### Admin Test Route

```txt
GET /api/user/admin
```

Header:

```txt
Authorization: Bearer <admin_token>
```

Requires:

```txt
role = admin
```

---

## Product API

Base route:

```txt
/api/products
```

### Get All Products

```txt
GET /api/products
```

Public route.

---

### Get Single Product

```txt
GET /api/products/:id
```

Public route.

---

### Create Product

```txt
POST /api/products
```

Protected admin-only route.

Header:

```txt
Authorization: Bearer <admin_token>
```

Body:

```json
{
  "name": "Nike Air Max",
  "description": "Premium running shoes",
  "price": 120,
  "oldPrice": 160,
  "category": "Fashion",
  "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  "stock": 12,
  "featured": true
}
```

---

### Delete Product

```txt
DELETE /api/products/:id
```

Protected admin-only route.

Header:

```txt
Authorization: Bearer <admin_token>
```

---

## Middleware

File:

```txt
src/middleware/authMiddleware.js
```

### protect

Checks:

- Authorization header
- Bearer token
- JWT validity

Adds decoded user to:

```txt
req.user
```

### adminOnly

Checks:

```txt
req.user.role === "admin"
```

---

## Important Development Notes

### Making a User Admin

In MongoDB Compass:

1. Open `shopverse`
2. Open `users`
3. Find user document
4. Change:

```json
"role": "user"
```

to:

```json
"role": "admin"
```

5. Save
6. Login again to get a fresh token with admin role

---

## Current Completed Backend Features

- MongoDB connection
- Register API
- Login API
- JWT token generation
- Password hashing
- Protected route middleware
- Admin-only middleware
- Product model
- Get all products
- Get single product
- Create product
- Delete product

---

## Next Planned Work

The next recommended backend phase is:

# Order System

Backend tasks:

- Order model
- Create order API
- Get logged-in user orders
- Get all orders for admin
- Update order status
- Clear cart after successful order

Suggested routes:

```txt
POST   /api/orders
GET    /api/orders/my-orders
GET    /api/orders
PATCH  /api/orders/:id/status
```

Suggested Order fields:

```txt
user
items
shippingAddress
paymentMethod
totalPrice
status
isPaid
paidAt
isDelivered
deliveredAt
timestamps
```

---

## Portfolio Value

This backend demonstrates:

- REST API design
- Authentication
- Authorization
- MongoDB models
- CRUD operations
- Admin-only routes
- Full-stack ecommerce architecture
