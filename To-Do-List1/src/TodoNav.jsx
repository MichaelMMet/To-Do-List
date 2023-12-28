import React from "react";
import { useState } from "react";

const TodoNav = ({ onSubmit, onAddCategory, categories, onRemoveCategory }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    onAddCategory(newCategory);
    setNewCategory(""); // Clear input after adding a category
  };

  return (
    <div className="nav-container">
      <div className="nav-section">
        <h1>DO IT!</h1>
        <p>logo here</p>
        {/* Use onClick for button click events */}
        <div className="nav-section">
          <button className="new-item" onClick={onSubmit}>
            Add a new item!
          </button>
        </div>
        <div className="nav-section">
          <form onSubmit={handleAddCategory} className="category-form">
            <div className="form-section">
              <label htmlFor="category"></label>
              <input
                type="text"
                placeholder="New Category"
                name="category"
                id="category"
                onChange={handleCategoryChange}
              />
            </div>
            <button type="submit">Add Category</button>
          </form>
        </div>
      </div>
      <div className="nav-section">
        <div className="nav-section">
          <h3>Categories:</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                {category}
                <button onClick={() => onRemoveCategory(category)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoNav;
