# 🛍️ E-Commerce Frontend & Admin Panel

> A modern e-commerce application featuring a customer-facing shopping platform and a dedicated admin dashboard for management.

## 📂 Project Structure

This repository contains two distinct applications:

1.  **Frontend (Root):** The main customer-facing store built with Create React App.
2.  **Admin Panel (`/admin-panel`):** A fast, lightweight dashboard built with React and Vite.

---

## 🚀 Tech Stack

### **Customer Frontend**
* **Framework:** React.js (Create React App)
* **Routing:** React Router DOM (v6)
* **Testing:** React Testing Library
* **Styling:** CSS3

### **Admin Panel**
* **Build Tool:** Vite
* **Framework:** React.js
* **Routing:** React Router DOM (v7)
* **Linting:** ESLint

---

## ✨ Features

### **🛒 Customer Store**
* **Responsive Navigation:** Browsing by categories (Men, Women, Kids).
* **Product Management:** View individual product details via dynamic routing (`/product/:productId`).
* **Shopping Cart:** Dedicated page for managing selected items.
* **User Accounts:** Login and Signup functionality.
* **Banners:** Category-specific promotional banners.

### **🛠 Admin Dashboard**
* **Dashboard Interface:** Centralized admin view.
* **Navigation:** Dedicated admin navbar.
* **Optimized Performance:** Built with Vite for fast HMR (Hot Module Replacement).

---

## 🛠️ Getting Started

To run the full application, you will need to set up both the **Frontend** and the **Admin Panel** separately.

### 1. Setup Customer Frontend

The main store is located in the root directory.

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Development Server:**
    ```bash
    npm start
    ```
    * Runs on `http://localhost:3000` by default.

### 2. Setup Admin Panel

The admin dashboard is located in the `admin-panel` folder.

1.  **Navigate to the directory:**
    ```bash
    cd admin-panel
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    * Runs on a separate port (typically `http://localhost:5173`) provided by Vite.

---

## 📜 Scripts

### Root (Frontend)
* `npm start`: Runs the app in development mode.
* `npm run build`: Builds the app for production to the `build` folder.
* `npm test`: Launches the test runner.

### Admin Panel
* `npm run dev`: Starts the Vite development server.
* `npm run build`: Builds the admin panel for production.
* `npm run lint`: Runs ESLint to check code quality.

---

## 🤝 Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

**Author:** Shaheer Developer
