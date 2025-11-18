<div align="center">

# ✅ To-Do List App

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=22&pause=1000&color=4CAF50&center=true&vCenter=true&width=600&lines=Task+Management+Made+Easy;Category-Based+Organization;React+Powered+Productivity" alt="Typing SVG" />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">

**A feature-rich, intuitive to-do list application built with React, offering category-based task organization and a clean, responsive interface for enhanced productivity.**

</div>

---

## 🎯 Overview

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="250">
</div>

The To-Do List App is a modern task management solution that helps users organize their daily activities efficiently. Built with React and featuring a clean, intuitive interface, it offers category-based organization, task completion tracking, and dynamic filtering capabilities.

## ✨ Features

<table>
<tr>
<td width="50%">

### 📝 **Task Management**
- ➕ **Add Tasks**: Create new tasks with titles and categories
- ✏️ **Custom Categories**: Create and manage your own categories
- ✅ **Mark Complete**: Check off completed tasks with visual feedback
- 🗑️ **Delete Tasks**: Remove unwanted tasks easily

### 🏷️ **Category System**
- 📂 **Dynamic Categories**: Categories automatically generate from tasks
- 🔍 **Filter by Category**: View tasks by specific category
- 👀 **View All**: See all tasks across categories
- 🆕 **Add New Categories**: Create categories on-the-fly

</td>
<td width="50%">

### 🎨 **User Experience**
- 📱 **Responsive Design**: Works seamlessly on all devices
- 💫 **Interactive UI**: Hover effects and smooth transitions
- ⚡ **Real-time Updates**: Instant feedback for all actions
- 🎯 **Clean Interface**: Minimal, distraction-free design

### 🧩 **Technical Features**
- 🔄 **State Management**: React hooks for efficient state handling
- 🎪 **Component Architecture**: Modular, reusable components
- 📦 **Local State**: Client-side data management
- 🔧 **Form Handling**: Controlled inputs with validation

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

### Frontend Framework
<p>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/JSX-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="JSX"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
</p>

### Routing & Tools
<p>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
<img src="https://img.shields.io/badge/Create_React_App-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white" alt="Create React App"/>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM"/>
</p>

</div>

## 🚀 Quick Start

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="250">
</div>

### 📋 Prerequisites
- Node.js (≥14.0)
- npm or yarn

### 🔧 Installation

**1. Clone the repository**
```bash
git clone https://github.com/Abdul-SubhanCheema/To-Do-List-App.git
cd To-Do-List-App
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm start
```

**4. Open your browser**
Navigate to `http://localhost:3000` to start managing your tasks!

## 📁 Project Structure

```
To-Do-List-App/
├── 🎨 public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # App favicon
│   └── manifest.json       # PWA configuration
├── ⚛️ src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── TodoForm.jsx        # Task creation form component
│   ├── TodoList.jsx        # Task display component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── 📦 package.json         # Dependencies and scripts
└── 📖 README.md           # Project documentation
```

## 🧩 Component Architecture

### 🏗️ App.js (Main Container)
**State Management:**
- `todos`: Array of all tasks
- `categories`: Dynamic list of available categories
- `filteredTodos`: Tasks filtered by selected category
- `selectedCategory`: Currently active category filter

**Key Functions:**
- `addTodo`: Adds new tasks to the list
- `deleteTodo`: Removes tasks by ID
- `toggleComplete`: Marks tasks as complete/incomplete
- `handleCategoryChange`: Filters tasks by category

### 📝 TodoForm.jsx (Task Creation)
**Features:**
- Controlled form inputs for task title and category
- Dynamic category selection with "Add New Category" option
- Form validation and submission handling
- Conditional rendering for new category input

### 📋 TodoList.jsx (Task Display)
**Features:**
- Maps through todos array to display tasks
- Checkbox for completion status with visual feedback
- Inline task editing with category display
- Delete button for each task

## 🎨 Design System

### 🎭 Color Palette
- **Primary Green**: `#4CAF50` (buttons, active states)
- **Hover Green**: `#45a049` (button hover effects)
- **Delete Red**: `#f44336` (delete buttons)
- **Background**: `#f9f9f9` (main app background)
- **Card Background**: `#ffffff` (task cards)
- **Border**: `#ccc` and `#ddd` (borders and dividers)

### 📐 Layout Features
- **Container**: 800px max-width, centered design
- **Flexbox**: Used for form layout and task alignment
- **Border Radius**: 8px for main container, 4px for elements
- **Spacing**: Consistent 20px margins and 10px padding

### 💫 Interactive Elements
- **Hover Effects**: Color transitions on buttons
- **Active States**: Bold text for selected categories
- **Visual Feedback**: Strikethrough for completed tasks
- **Responsive Forms**: Flexible input fields

## 📊 Data Structure

### Task Object Schema
```javascript
{
  id: Date.now(),           // Unique timestamp ID
  title: "Task title",      // Task description
  category: "Work",         // Task category
  completed: false          // Completion status
}
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App |

## 🌟 Future Enhancements

- 💾 **Local Storage**: Persist tasks between sessions
- 📅 **Due Dates**: Add deadline functionality
- ⭐ **Priority Levels**: High, medium, low priority tasks
- 🔍 **Search Functionality**: Search through tasks
- 📊 **Progress Tracking**: Task completion statistics
- 🎨 **Custom Themes**: Multiple color schemes
- 📱 **Progressive Web App**: Offline functionality
- 🔄 **Drag & Drop**: Reorder tasks by dragging
- 📧 **Task Sharing**: Share tasks via email/link
- 🔔 **Notifications**: Task reminder system

## 💡 Usage Tips

### Getting Started
1. **Add Your First Task**: Enter a task title and select or create a category
2. **Organize with Categories**: Use categories like "Work", "Personal", "Shopping"
3. **Filter Tasks**: Click on category names to filter your view
4. **Mark Complete**: Check off tasks as you complete them
5. **Clean Up**: Delete tasks you no longer need

### Best Practices
- Use descriptive task titles
- Create meaningful categories
- Regular cleanup of completed tasks
- Use the "All" filter to see everything

## 🤝 Contributing

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="200">
</div>

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

<div align="center">

**Abdul Subhan Cheema**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Abdul-SubhanCheema)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abdulsubhan303)

<img src="https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif" width="100">

### ✅ *"Productivity is never an accident. It is always the result of a commitment to excellence."* ✨

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="500">

**⭐ If this project helped you stay organized, consider giving it a star!**

</div>
