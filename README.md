# 🌿 Plantify - AI-Powered Agriculture and AR Visualization Marketplace

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

![image](https://github.com/user-attachments/assets/995f47fc-7c4c-45ea-9e8e-c1d005a68e49)

![image](https://github.com/user-attachments/assets/3e9c36a1-1c9e-4e02-bab8-aeee825862c5)

![image](https://github.com/user-attachments/assets/e63eeef9-a57d-424a-bcb3-acef91354664)

![image](https://github.com/user-attachments/assets/359aa0b0-454f-437d-9011-ee25ce29cec9)

![image](https://github.com/user-attachments/assets/e33928bc-8d46-4fd5-bef3-44ed3782c0e6)

![image](https://github.com/user-attachments/assets/8ed403c8-1c05-4c5f-bd2c-63816f14f7b6)

![image](https://github.com/user-attachments/assets/0c478777-11a3-476a-87d1-f021a130073f)

![image](https://github.com/user-attachments/assets/1e32df1c-22e8-46c0-b420-70ce7eecdae5)

![image](https://github.com/user-attachments/assets/9eed1b76-5447-47eb-9d18-023d87208d4d)

![image](https://github.com/user-attachments/assets/e4ab47f1-fdd0-489e-aa3b-8e268eb34f7e)

![image](https://github.com/user-attachments/assets/7c0cc653-851f-480f-aafc-1873e55666b4)

![image](https://github.com/user-attachments/assets/fa5232aa-37d1-408d-ac15-1bc95abb0507)

![image](https://github.com/user-attachments/assets/afca6562-dcf3-4980-9a27-4b5e00dafe15)

![image](https://github.com/user-attachments/assets/2475f6dc-8837-434d-ba03-8ce8936ab083)

![image](https://github.com/user-attachments/assets/42684211-a8b3-4810-9c0a-cffbc695ec67)

![image](https://github.com/user-attachments/assets/b915a4a1-9b80-4db3-97ec-85d36fffa209)

![image](https://github.com/user-attachments/assets/dbadd378-5771-4898-8b37-261ebd43a881)

![image](https://github.com/user-attachments/assets/73fbfbd8-ebb1-4ba1-a71d-c889130ae831)

![image](https://github.com/user-attachments/assets/317e2bf2-6fff-4f76-bfe3-463d94a5f9b4)

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
   Navigate to [http://localhost:5173](http://localhost:3000) in your browser.

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
