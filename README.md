# 🛍️ ShopVerse Server

Backend API for ShopVerse MERN E-commerce platform.

## 🌐 Live API

https://shopverse-server-sigma.vercel.app

---

# ✨ Features

- JWT Authentication
- User Authorization
- Product CRUD
- Order Management
- Admin Protected Routes
- MongoDB Database
- REST API Architecture

---

# 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

---

# ⚙️ Installation

```bash
git clone https://github.com/Tsharun25/shopverse-server.git
cd shopverse-server
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173
```

---

# 📡 API Routes

## Auth

```txt
POST /api/auth/register
POST /api/auth/login
```

## Products

```txt
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

## Orders

```txt
POST /api/orders
GET /api/orders/my-orders
GET /api/orders
PATCH /api/orders/:id/status
```

---

# 🚀 Deployment

- Frontend: Vercel
- Backend: Vercel
- Database: MongoDB Atlas

---

# 👨‍💻 Developer

Harun Ar Rashid

- GitHub: https://github.com/Tsharun25