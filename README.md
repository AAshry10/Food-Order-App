<div id="top"></div>

<div align="left">

# React Practice — Food Order App

Concepts : 
- Components
- Props
- State
- Refs & Portals
- useEffect Hook - handling Side Effects
- Custom Hooks 
- Context API & Reducers
- Handling HTTP Requests
- Handling Forms (Form Actions)

A React practice project (Udemy “React Course”) to browse meals, add/remove items from a cart, and place an order via a simple backend API. Includes a checkout modal and order confirmation state.

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/CSS-1572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS">
<img src="https://img.shields.io/badge/Node.js-339933.svg?style=flat&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=express&logoColor=white" alt="Express">

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run the backend](#Run-Your-Backend-Server)
  - [Run the frontend](#Run-The-Front-End)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

This app simulates a simple restaurant ordering flow:
- Meals are loaded from an API and displayed in a list
- You can add meals to a cart (and change quantities)
- A cart modal shows items + total price
- Checkout collects customer details and submits the order
- On success, the cart is cleared and a confirmation message is shown

---

## Features

- Meal list loaded from backend (GET /meals)
- Cart management (add, remove, clear) using Context + Reducer
- Cart & Checkout shown as modals with UI state managed via context
- Checkout form that submits orders to backend (POST /orders)
- Basic HTTP handling with a reusable useHttp hook:
- loading state
- error handling
- response handling

--- 

## 🚀Getting Started

### Prerequisites

- **Node.js** 
- **npm** (comes with Node)

### Installation

1. **Clone the repository:**

    ```sh
     git clone https://github.com/AAshry10/Food-Order-App.git
    ```

2. **Navigate to the project Backend directory (If not already navigated):**

    ```sh
     cd Food-Order-App
    ```

3. **Install the dependencies:**

   ```sh
    npm install
   ```

### Run Your Backend Server

4. **Settign Up The Backend Server**

    4.1 Navigate to the backend directory in a new terminal
    ```sh
     cd backend
    ```

    4.2 Install depencies
    ```sh
     npm install
    ```

    4.3 Run the server
    ```sh
     npm start 
    ```
 **Your backend server will be running on [localhost:3000](https://localhost:3000)** 

### Run The Front-End

5. Go Back to the main directory terminal ---> Food-Order-App
  
6. Run the project with:

   ```sh
    npm run dev
   ```

**Navigate to your [localhost:5173](https://localhost:5173)**

--- 

## 🏗️Project Structure

```sh
└── Food Order App/
    ├── backend/
    │   ├── data/
    │   │   ├── available-meals.json
    │   │   └── orders.json
    │   ├── app.js
    │   ├── package-lock.json
    │   └── package.json
    ├── src/
    │   ├── assets/
    │   │   └── logo.jpg
    │   ├── components/
    │   │   ├── hooks/
    │   │   │   └── useHttp.js
    │   │   ├── UI/
    │   │   │   ├── Button.jsx
    │   │   │   ├── Error.jsx
    │   │   │   ├── Input.jsx
    │   │   │   └── Modal.jsx
    │   │   ├── Cart.jsx
    │   │   ├── CartItem.jsx
    │   │   ├── Checkout.jsx
    │   │   ├── Header.jsx
    │   │   ├── MealItem.jsx
    │   │   └── Meals.jsx
    │   ├── Store/
    │   │   ├── CartContext.jsx
    │   │   └── UserProgressContext.jsx
    │   ├── util/
    │   │   └── formatting.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    └── vite.config.js
```

---

## 🧾License

[MIT License](https://choosealicense.com/licenses). For more details, refer to the [LICENSE](./LICENSE) file.

---

💖 *Built with love by [Ahmed ELashry](https://github.com/AAshry10)*  

---


