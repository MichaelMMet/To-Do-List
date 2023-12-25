import React from "react";

const TodoNav = ({ onSubmit }) => {
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
      </div>
      <div className="nav-section"></div>
    </div>
  );
};

export default TodoNav;
