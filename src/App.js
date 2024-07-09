import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const uniqueCategories = [...new Set(todos.map(todo => todo.category))];
    setCategories(['All', ...uniqueCategories]);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter(todo => todo.category === category));
    }
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo} categories={categories} />
      <TodoList
        todos={selectedCategory === 'All' ? todos : filteredTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
      <div className="category-filter">
        <h3>Filter by Category:</h3>
        <ul>
          {categories.map(category => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
