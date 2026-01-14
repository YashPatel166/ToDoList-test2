# Todo List Demo App

A beautiful, modern todo list application built with React and Vite. This is a front-end only application with no database required - all todos are stored in the browser's memory.

## Features

- ✨ **Add Tasks**: Create new todo items with a simple input field
- ✅ **Mark Complete**: Toggle tasks as completed with checkboxes
- 🗑️ **Delete Tasks**: Remove tasks you no longer need
- 📊 **Statistics**: View total, completed, and pending task counts
- 📱 **Responsive Design**: Works beautifully on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd todo-list-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install all required packages including React, React DOM, and Vite.

## Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

The development server includes:
- Hot Module Replacement (HMR) - changes reflect instantly
- Fast refresh for React components
- Source maps for debugging

### Production Build

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
todo-list-demo/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```

## Usage

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as completed
3. **Delete a Task**: Click the trash icon (🗑️) to remove a task
4. **View Statistics**: Check the stats section to see total, completed, and pending tasks

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with gradients and animations

## Browser Support

This application works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual port number.

### Dependencies Installation Issues

If you encounter issues installing dependencies:

1. Delete `node_modules` folder and `package-lock.json` (if exists)
2. Clear npm cache: `npm cache clean --force`
3. Reinstall: `npm install`

### Build Errors

If you encounter build errors:

1. Ensure you're using Node.js version 14 or higher
2. Try deleting `node_modules` and reinstalling dependencies
3. Check that all files are in the correct locations

## License

This is a demo application for educational purposes.

## Contributing

This is a demo project, but feel free to fork and modify it for your own use!

---

**Enjoy organizing your tasks!** 🎉

