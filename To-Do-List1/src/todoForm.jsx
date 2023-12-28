// TodoForm.jsx
import React from "react";

const TodoForm = ({ formData, onInputChange, onSubmit }) => {
  console.log("TodoForm rendering", formData); // Add this line

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-part">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={onInputChange}
          />
        </div>
        <div className="form-part">
          <label htmlFor="date">Due by:</label>
          <input
            type="date"
            name="dueDate"
            id="date"
            value={formData.dueDate}
            onChange={onInputChange}
          />
        </div>
        <div className="form-part">
          <label htmlFor="description">Info:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={onInputChange}
          />
        </div>
        <div className="form-part">
          <label htmlFor="prio">Priority:</label>
          <input
            type="text"
            name="priority"
            id="prio"
            value={formData.priority}
            onChange={onInputChange}
          />
        </div>
        <div className="form-part">
          <label htmlFor="notes">Notes:</label>
          <input
            type="text"
            name="notes"
            id="notes"
            value={formData.notes}
            onChange={onInputChange}
          />
        </div>
        <div className="form-part">
          <label htmlFor="category">Notes:</label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.notes}
            onChange={onInputChange}
          />
        </div>
        {/* Add similar input fields for other properties (description, dueDate, priority, notes) */}
        <button type="submit">Add TodoItem</button>
      </form>
    </div>
  );
};

export default TodoForm;
