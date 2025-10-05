# 📝 Modern Todo App

A beautiful, responsive todo application built with Node.js, Express, MongoDB, and modern CSS. Features a clean one-page design with full CRUD operations and real-time timestamps.

![Todo App Preview](https://img.shields.io/badge/Status-Complete-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- 🎨 **Modern UI Design** - Clean, responsive interface with gradient backgrounds
- 📱 **One-Page Layout** - No scrolling needed, everything fits in viewport
- ✅ **Full CRUD Operations** - Create, Read, Update, Delete todos
- 🕐 **Timestamps** - Automatic creation and update timestamps
- 🌙 **Dark Mode Support** - Automatically adapts to system preferences
- 📊 **MongoDB Integration** - Persistent data storage
- 🎯 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized for speed and efficiency

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating, Modern CSS
- **Styling**: CSS Variables, Flexbox, CSS Grid
- **Dependencies**:
  - `express` - Web framework
  - `mongoose` - MongoDB object modeling
  - `ejs` - Templating engine
  - `body-parser` - Parse request bodies
  - `moment` - Date/time formatting
  - `dotenv` - Environment variables
  - `nodemon` - Development server

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NabinMahanty/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file
   cp .env.example .env

   # Edit .env and add your MongoDB connection string
   CONNECTION_URL=mongodb://localhost:27017/todoDb
   ```

4. **Start MongoDB**

   ```bash
   # If using local MongoDB
   mongod

   # Or make sure your MongoDB Atlas cluster is running
   ```

5. **Run the application**

   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start
   ```

6. **Open your browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
todo-app/
├── 📂 controllers/
│   └── todo.js          # Business logic for todo operations
├── 📂 init/
│   └── mongodb.js       # Database connection setup
├── 📂 models/
│   └── Todo.js          # MongoDB schema definition
├── 📂 public/
│   └── 📂 css/
│       └── style.css    # Modern CSS styling
├── 📂 routes/
│   └── todo.js          # Express routes
├── 📂 views/
│   ├── index.ejs        # Home page template
│   ├── new-todo.ejs     # Add todo page
│   ├── updatetodo.ejs   # Edit todo page
│   └── deleteTodo.ejs   # Delete confirmation page
├── app.js               # Express app configuration
├── index.js             # Server entry point
├── package.json         # Project dependencies
├── .env                 # Environment variables
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🎯 API Endpoints

| Method | Endpoint                              | Description              |
| ------ | ------------------------------------- | ------------------------ |
| GET    | `/`                                   | Display all todos        |
| GET    | `/add-todo`                           | Show add todo form       |
| POST   | `/add-todo`                           | Create new todo          |
| GET    | `/update-todo?id=:id`                 | Show edit form           |
| POST   | `/update-todo/:id`                    | Update existing todo     |
| GET    | `/delete-todo?id=:id`                 | Show delete confirmation |
| GET    | `/confirm-delete?id=:id&confirm=true` | Delete todo              |

## 🎨 Design Features

### Modern CSS Variables

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --success-color: #10b981;
  --danger-color: #ef4444;
  /* ... more variables */
}
```

### Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 640px and below

### Button System

- **Add Button**: Blue gradient
- **Edit Button**: Green gradient
- **Delete Button**: Red gradient
- **Submit Button**: Purple gradient
- **Back Button**: Light gray

## 📱 Screenshots

### Desktop View

```
┌─────────────────────────────────────────┐
│  📝 TODO LIST                          │
│  ┌─────────────────┐                   │
│  │   Add Todo      │                   │
│  └─────────────────┘                   │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ Title │ Desc │ Created │ Updated │ Action │
│  ├─────────────────────────────────────┤│
│  │ Task 1│ ... │ timestamp│ timestamp│ Edit Delete │
│  │ Task 2│ ... │ timestamp│ timestamp│ Edit Delete │
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
CONNECTION_URL=mongodb://localhost:27017/todoDb
PORT=8000
NODE_ENV=development
```

### MongoDB Setup

**Local MongoDB:**

```bash
# Install MongoDB
# Windows: Download from mongodb.com
# macOS: brew install mongodb-community
# Linux: apt-get install mongodb

# Start MongoDB service
mongod
```

**MongoDB Atlas (Cloud):**

1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a cluster
3. Get connection string
4. Update `.env` file

## 🚀 Deployment

### Heroku Deployment

1. **Install Heroku CLI**
2. **Create Heroku app**

   ```bash
   heroku create your-todo-app-name
   ```

3. **Set environment variables**

   ```bash
   heroku config:set CONNECTION_URL=your_mongodb_atlas_url
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

### Vercel Deployment

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard**

## 📋 Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Install dependencies
npm install

# Run linting (if configured)
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Nabin Mahanty**

- GitHub: [@NabinMahanty](https://github.com/NabinMahanty)
- Repository: [todo-app](https://github.com/NabinMahanty/todo-app)

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com/) - Document database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [EJS](https://ejs.co/) - Embedded JavaScript templating
- [Moment.js](https://momentjs.com/) - Date manipulation library

## 📞 Support

If you have any questions or issues, please:

1. Check the [Issues](https://github.com/NabinMahanty/todo-app/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your environment and the problem

---

⭐ **Star this repository if you found it helpful!** ⭐
