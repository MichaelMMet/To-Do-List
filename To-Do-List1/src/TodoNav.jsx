import React from "react";
import { useState } from "react";

const TodoNav = ({
  onSubmit,
  onAddCategory,
  categories,
  onRemoveCategory,
  onCategoryClick,
  selectedCategory,
}) => {
  console.log("TodoNav rendering. Categories:", categories);
  console.log("TodoNav rendering. Selected Category:", selectedCategory);
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
        <h1 className="web-name">DO IT!</h1>
        <i class="fa-solid fa-clipboard"></i>{" "}
        {/* Use onClick for button click events */}
        <div className="nav-section">
          <button id="add-item" onClick={onSubmit}>
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
            <button type="submit" id="add-category">
              Add Category
            </button>
          </form>
        </div>
      </div>
      <div className="nav-section category-section">
        <h3>Categories:</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li
              key={index}
              className="category-item"
              onClick={() => onCategoryClick(category)}
            >
              {category}

              <button
                id="remove-cat-btn"
                onClick={() => onRemoveCategory(category)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoNav;
