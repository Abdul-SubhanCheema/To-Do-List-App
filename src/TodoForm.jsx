// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo, categories }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category.trim()) {
      addTodo({
        id: Date.now(),
        title,
        category: category === 'new' ? newCategory.trim() : category,
        completed: false
      });
      setTitle('');
      setCategory('');
      setNewCategory('');
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === 'new') {
      setCategory('new');
    } else {
      setCategory(selectedCategory);
    }
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={handleCategoryChange}
        required
      >
        <option value="">Select category or add new</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
        <option value="new">Add New Category</option>
      </select>
      {category === 'new' && (
        <input
          type="text"
          placeholder="Enter new category"
          value={newCategory}
          onChange={handleNewCategoryChange}
          required
        />
      )}
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
