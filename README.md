# 🧠 Quora Post Clone

A backend-powered clone of Quora’s post system using Node.js, Express, and MySQL. This project demonstrates RESTful API design, relational data modeling, and CRUD operations for managing user-generated posts.
---
## 🚀 Features

- ✍️ Create and publish posts with title and content
- 📚 View all posts in a feed-style layout
- 🛠️ Edit or delete existing posts
- 🧾 Timestamp each post (created & updated)
- 🔍 Search posts by keywords (optional enhancement)
- 📐 Structured relational schema using MySQL

---


## 🛠️ Tech Stack

| Technology     | Role                                 |
|----------------|--------------------------------------|
| Node.js        | Server-side runtime                  |
| Express.js     | Web framework for routing and APIs   |
| MySQL          | Relational database for post storage |
| Sequelize      | ORM for MySQL schema and queries     |
| EJS / HTML     | Templating engine for dynamic views  |
| CSS            | Styling and layout                   |

---
## 📂 Project Structure
# 🧠 Quora Post Clone (MySQL Edition)

A backend-powered clone of Quora’s post system using Node.js, Express, and MySQL. This project demonstrates RESTful API design, relational data modeling, and CRUD operations for managing user-generated posts.

---

## 🚀 Features

- ✍️ Create and publish posts with title and content
- 📚 View all posts in a feed-style layout
- 🛠️ Edit or delete existing posts
- 🧾 Timestamp each post (created & updated)
- 🔍 Search posts by keywords (optional enhancement)
- 📐 Structured relational schema using MySQL

---

## 🛠️ Tech Stack

| Technology     | Role                                 |
|----------------|--------------------------------------|
| Node.js        | Server-side runtime                  |
| Express.js     | Web framework for routing and APIs   |
| MySQL          | Relational database for post storage |
| Sequelize      | ORM for MySQL schema and queries     |
| EJS / HTML     | Templating engine for dynamic views  |
| CSS            | Styling and layout                   |

---

## 📂 Project Structure
quora-post-mysql/ ├── models/ │   └── post.js           # Sequelize model for posts ├── views/ │   ├── index.ejs         # Homepage with all posts │   ├── new.ejs           # Form to create a post │   └── edit.ejs          # Form to edit a post ├── public/ │   └── style.css         # Custom styling ├── routes/ │   └── postRoutes.js     # API endpoints for CRUD ├── config/ │   └── db.js             # MySQL connection setup ├── index.js              # Main server file └── package.json          # Project metadata
---

## 🧪 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/antima789779/Quora-Post2.git
   cd quora-post-mysql
2- Install dependencies
npm install
3. Configure MySQL
- Create a database named quora_posts
- Update credentials in config/db.js
  
4 Start the server
node index.js
5. Visit
http://localhost:8080

🧠 Learning Outcomes
- Designed relational schema for post management
- Practiced Sequelize ORM for MySQL integration
- Built RESTful APIs with Express
- Rendered dynamic views using EJS
- Structured scalable backend logic

📌 Future Enhancements
- ✅ User authentication and session management
- ✅ Commenting system
- ✅ Rich text editor for posts
- ✅ Tag-based filtering and categories
- ✅ Pagination and sorting

📜 License
This project is open-source and available under the MIT License.


