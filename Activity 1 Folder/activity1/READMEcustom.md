# Activity1 - Task Management Frontend

This is the **front-end** for the Task Management App, built with **React** and styled using **custom CSS with gradient backgrounds**. It connects to the **NestJS back-end** API to manage tasks with full **CRUD functionality**.

---

## Features

* Add, edit, check/uncheck, and delete tasks
* Animated gradient background
* Stylish task list inside a glassmorphism card
* Communicates with back-end via **Axios**
* Built using **Create React App (CRA)**

---

## Requirements

* **Node.js** (>= 18.x recommended)
* **npm** (comes with Node)

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/chimken-adobo/Laboratory-Activities.git
   cd activity1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. The app will be available at:

   ```
   http://localhost:3000
   ```

⚠️ Make sure your **back-end (NestJS)** is running on a different port (also `3000` by default).
If both front-end and back-end use the same port, you’ll need to:

* Run the back-end on another port (`3001` for example), or
* Use a proxy setting in the front-end (`package.json`)

Example proxy config in `package.json`:

```json
"proxy": "http://localhost:3000"
```

---

## Available Scripts

* `npm start` → Start the React app in development mode
* `npm run build` → Build the app for production
* `npm test` → Run tests with React Testing Library
* `npm run eject` → Eject from CRA (not recommended unless needed)

---

## Project Structure

```
src/
 ├── App.js          # Main app component
 ├── App.css         # Styles
 ├── index.js        # Entry point
 └── components/     # (Optional) Reusable components
```

---

## Example Usage

1. Enter a task in the input bar → click **Add**
2. Click the **checkbox** to mark as complete/incomplete
3. Use **Edit** and **Delete** buttons to manage tasks
4. Tasks are saved in the back-end API