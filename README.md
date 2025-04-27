# 🌿 Plantify

**Plantify** is an innovative agricultural e-commerce platform designed to empower farmers, gardeners, and agriculture enthusiasts. It offers a seamless shopping experience combined with modern technology like AI-based crop recommendation, AR-based plant visualization, and an intuitive online marketplace for seeds, fertilizers, and tools.

---

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Product Listings**: Browse high-quality seeds, fertilizers, and agricultural tools
- **Augmented Reality (AR) Visualization**: Visualize plant growth using 3D models in real environment
- **AI Crop Recommendation**: Get the top 5 crops recommended for your region based on location
- **Smart Search and Filtering**: Quickly find products based on categories
- **Add to Cart**: Add/remove products and manage your shopping cart
- **Order Management**: View and manage your placed orders
- **Responsive Design**: Fully responsive across devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, elegant, and intuitive interface
- **State Detection via Geolocation**: Automatically suggest crops based on the user's geolocation
- **Crop-Specific Growing Requirements**: Access detailed information on the specific requirements for growing selected crops, including soil type, watering needs, sunlight exposure, and optimal planting seasons.

---

## 🛠️ Tech Stack

- **Frontend**:
  - React.js
  - React Router DOM
  - Three.js (for 3D/AR models)
  - Vite (build tool)
  - Axios
  - CSS3, Flexbox, Grid

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB Atlas (NoSQL Database)

- **AR & 3D Integration**:
  - Three.js (GLTFLoader, OrbitControls)
  - WebRTC for Camera Streaming

- **Others**:
  - Local Storage for Cart and User State
  - Geolocation API for detecting user's location

---

## 📁 Project Structure

```
Plantify/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── models/
│   │   └── textures/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       ├── index.jsx
│       └── styles/
├── README.md
├── package.json
└── vite.config.js
```

---

## 📸 Screenshots

> _(Insert screenshots of your Home page, Product listing page, AR Visualization page, and Cart page here.)_

---

## 🖥️ Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/heemit/Plantify.git
   cd Plantify
   ```

2. **Install frontend and backend dependencies:**
   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

3. **Start frontend and backend servers:**
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend dev server
   cd ../frontend
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Important Functionalities

- **State-based Crop Recommendation:**  
  Automatically detect user’s location and suggest crops best suited for that region.

- **AR 3D Visualization:**  
  Allow users to view plant models (e.g., Tomato Plant) on live camera background through Three.js.

- **Geolocation Persistence:**  
  Location is stored in localStorage for session efficiency and expiry after 1 hour.

- **Cart Management:**  
  Add, view, and delete products from the cart stored in localStorage.

- **Product Details Page:**  
  Each recommended crop links to a detailed page with product description, pricing, and add-to-cart functionality.

- **Secure Authentication:**  
  Login required for checkout and certain features.

- **Crop-Specific Growing Requirements:**  
  Each crop has a dedicated page detailing its specific growing requirements, such as soil type, watering needs, sunlight exposure, and optimal planting seasons.

---

## 📚 References

- Three.js Documentation: [https://threejs.org/](https://threejs.org/)
- React.js Documentation: [https://react.dev/](https://react.dev/)
- MongoDB Atlas: [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
- Node.js and Express.js Docs

---

## 👨‍💻 Author
This project was developed by:

**Heemit Shah**

Role: Full Stack Developer

Responsibilities: Designed and implemented the entire project, including frontend development, backend logic, database management, and AR integration.

---

# 🌱 Happy Farming with Plantify!
