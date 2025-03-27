# 📝 Task Manager Application

A simple full-stack Task Manager app that allows users to:

- Add new tasks (title & description)
- View a list of all tasks
- Mark tasks as completed or uncompleted

---

## 🛠️ Technologies Used

### Backend (NestJS):
- [NestJS](https://nestjs.com/)
- TypeScript
- In-memory storage (no database)
- RESTful API
- CORS support

### Frontend (Vue 3):
- [Vue 3](https://vuejs.org/)
- TypeScript
- Vite
- Tailwind CSS
- [Vue3 Toastify](https://vue3-toastify.js.org/) – for toast notifications
- Axios – for HTTP requests

---

## 📁 Project Structure
task-manager/ │ 
├── backend/ # NestJS API │ 
  └── src/ # Tasks module & main.ts │ 
├── frontend/ # Vue 3 frontend (Vite) │ 
  └── src/ # Vue components, assets, api service │ 
├── README.md # Project documentation

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js ≥ 18.x
- npm ≥ 9.x

---

## 📦 Backend Setup (NestJS)

> Location: `./task-manager-BE`

### 📥 Install Dependencies

```
cd task-manager-BE
npm install
```
### 🚀 Start the Server
```
 npm run start
```
By default, the backend runs on: http://localhost:3000

## 🎨 Frontend Setup (Vue 3 + Tailwind)
Location: ./task-manager-FE

### 📥 Install Dependencies
```
 cd frontend
 npm install
```
### 🚀 Start the Frontend
```
 npm run dev
```
The app should open in your browser at: http://localhost:5173

## 🌐 Connecting Frontend to Backend

The frontend is configured to make requests to:
``` 
http://localhost:3000/tasks
 ```
### ⚠️ Ensure the backend is running before interacting with the frontend.

## ✅ Features
- Add new tasks

- View task list

- Mark tasks as completed

- Mark tasks as uncompleted

- Toast notifications

- Responsive UI with Tailwind

### 📌 Notes
- Tasks are stored in-memory (will reset when backend restarts)

- No database setup required

- For production, add persistent storage & environment-based config
