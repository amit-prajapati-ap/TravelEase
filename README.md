
# 🌍 TravelEase

TravelEase is a modern and responsive travel booking application built with **React**, **Redux Toolkit**, **Material UI**, and a robust **Node.js + Express.js + MongoDB** backend. The platform allows users to explore destinations, view top-selling packages, and book trips seamlessly.

---

## 🚀 Live Demo

Application: [https://travelease-ruby.vercel.app](https://travelease-ruby.vercel.app)  
GitHub: [TravelEase Repository](https://github.com/amit-prajapati-ap/TravelEase)

---

## 📁 Project Structure

```
TravelEase/
├── backend/src                 # Node.js + Express API
│   ├── controllers/         # Auth, Destinations, Packages
│   ├── models/              # Mongoose models
│   ├── routes/              # API route handlers
│   ├── middleware/          # JWT Auth, validation
│   ├── config/              # MongoDB connection
│   ├── utils/               # Utility functions
│   ├── app.js               # App configurations for backend
│   ├── constants.js         # Constants of app
│   └── index.js             # Express entry point
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── store/           # RTK slices, store
│   │   └── App.jsx
│   │   └── main.jsx
└── README.md
```

---

## 🧩 Features

### ✅ Frontend (React + Redux Toolkit + Material UI)
- Built using **JavaScript only** (no TypeScript).
- Responsive and clean UI with **Material UI (MUI)**.
- **Hero Section**: “Discover Your Next Adventure” + CTA button.
- **Feature Highlights**: Easy Booking, Curated Destinations, Trusted Support.
- Fetches data via **Redux Toolkit** from backend:
  - `/api/destinations` → most popular destinations.
  - `/api/packages/top-selling` → top-selling packages.
- **Skeleton loaders** shown while data is loading.
- Reusable and responsive cards for packages and destinations.
- **Advantages Section** and **Testimonials** with icons.
- **Navbar and Footer** for consistent layout.

### ✅ Backend (Node.js + Express.js + MongoDB)
- **Authentication**:
  - Login and Signup routes (`/api/auth`)
  - JWT-based token authentication
- **CRUD Operations**:
  - Destinations (`/api/destinations`)
  - Packages (`/api/packages`)
- **MongoDB** with Mongoose for schema-based modeling.
- Proper use of Express middlewares and error handling.
- Modular file structure with separation of concerns.

---

## 📦 Installation & Running Locally

### 1. Clone the Repo
```bash
git clone https://github.com/amit-prajapati-ap/TravelEase.git
cd TravelEase
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create .env file with MONGO_URI, JWT_EXPIRES_IN, NODE_ENV='development', PORT='3001', JWT_SECRET, CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME
npm run dev
```
> API will run at `http://localhost:3001`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
> Frontend runs at `http://localhost:5173`

---

## 🔗 API Endpoints

### Auth
- `POST /api/auth/register` – User registration  
- `POST /api/auth/login` – User login  
- `POST /api/auth/logout` – User logout  
- `POST /api/auth/me` – Get user  

### Destinations
- `GET /api/dest/get-all-dest` – Get all destinations  
- `GET /api/dest/get-dest/:id` – Get destination 
- `POST /api/dest/add-dest` – Add new destination  
- `PUT /api/dest/update-dest/:id` – Update destination  
- `DELETE /api/dest/delete-dest/:id` – Delete destination  

### Packages
- `GET /api/pack/get-all-pack` – Get all packeges  
- `GET /api/pack/get-pack/:id` – Get packege 
- `POST /api/pack/add-pack` – Add new packege
- `PUT /api/pack/update-pack/:id` – Update packege
- `DELETE /api/pack/delete-pack/:id` – Delete packege  

---

## 🛡️ Security & Future Plans
- JWT-based authentication is implemented.
- Future upgrade plan: **OAuth 2.0** with Google/GitHub integration.
- Passwords securely hashed using bcrypt.
- Role-based access control (planned).

---

## 🔧 Tech Stack

| Tech              | Usage                              |
|-------------------|-------------------------------------|
| React             | Frontend UI                         |
| Redux Toolkit     | State management + async data       |
| Material UI       | UI components and layout            |
| React Icons       | Feature & UI icons                  |
| Node.js + Express | Backend server and API              |
| MongoDB + Mongoose| NoSQL database                      |
| JWT               | Authentication                      |
| Vercel            | Frontend & Backend Deployment                 |

---

## 🎯 Future Enhancements
- Add booking functionality.
- Role-based admin dashboard.
- Email verification and forgot-password flow.
- Payment gateway integration (e.g., Razorpay/Stripe).
- Infinite scroll or pagination.
- Multi-language and dark mode support.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Amit Prajapati**  
Feel free to connect or contribute on [GitHub](https://github.com/amit-prajapati-ap)
