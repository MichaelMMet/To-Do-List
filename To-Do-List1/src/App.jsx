import React, { useState } from "react";
import TodoItemFactory from "./TodoItemFactory";
import TodoItem from "./TodoItem";
import TodoNav from "./TodoNav";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "", // Corrected property name
    priority: "",
    notes: "",
  });

  const [todoList, setTodoList] = useState([]);

  const [isFormVisible, setIsFormVisible] = useState(false); // State for form visibility

  const todoItemFactory = new TodoItemFactory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed - Name: ${name}, Value: ${value}`);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new todoItem using the factory
    const newTodoItem = todoItemFactory.createTodoItem(
      formData.title,
      formData.description,
      formData.dueDate,
      formData.priority,
      formData.notes
    );

    // Add the new todoItem to the todoList
    setTodoList((prevTodoList) => [...prevTodoList, newTodoItem]);

    // Clear the form data
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      notes: "",
    });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  console.log("formData in App component:", formData); // Add this line

  return (
    <div>
      <div className="main-container">
        <TodoNav onSubmit={toggleFormVisibility} />

        {/* Render TodoForm only if isFormVisible is true */}
        {isFormVisible && (
          <TodoForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}

        <div className="todo-item-container">
          {todoList.map((todoItem, index) => (
            <TodoItem key={index} {...todoItem} className="todo-item" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
