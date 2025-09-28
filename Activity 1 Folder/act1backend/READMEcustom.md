# Act1Backend - Task Management API

This is the **back-end service** for the Task Management App, built with **NestJS** and **TypeORM** using **SQLite** as the database. It provides a REST API for managing tasks with full **CRUD functionality** (Create, Read, Update, Delete).

---

## Features

* Create, read, update, and delete tasks
* Built with **NestJS** (scalable Node.js framework)
* Uses **SQLite** for local database storage
* API documentation available via **Swagger UI**

---

## Requirements

* **Node.js** (>= 18.x recommended)
* **npm** (comes with Node)
* **NestJS CLI** (optional, for development)

```bash
npm install -g @nestjs/cli
```

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/chimken-adobo/Laboratory-Activities.git
   cd act1backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start:dev
   ```

4. The API will be available at:

   ```
   http://localhost:3000
   ```


---

## Available Scripts

* `npm run start` → Start the server in normal mode
* `npm run start:dev` → Start the server in watch mode (development)
* `npm run build` → Build the project
* `npm run lint` → Run ESLint and fix issues
* `npm run test` → Run unit tests
* `npm run test:e2e` → Run end-to-end tests

---

## Database

* Default database: **SQLite**
* Database file is automatically created when you run the app (using TypeORM)
* Configuration is found inside `app.module.ts`

---

## Project Structure

```
src/
 ├── tasks/         # Task module (controller, service, entity)
 ├── app.module.ts  # Root module
 ├── main.ts        # Application entry point
```

---

## Example Endpoints

* **GET** `/tasks` → Fetch all tasks
* **POST** `/tasks` → Create a new task
* **PUT** `/tasks/:id` → Update a task
* **DELETE** `/tasks/:id` → Delete a task