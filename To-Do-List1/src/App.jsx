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
    category: "",
  });

  const [todoList, setTodoList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      formData.notes,
      formData.category
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
      category: "",
    });

    toggleFormVisibility();
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const updateTodoItem = (index, newData) => {
    setTodoList((prevTodoList) => {
      const updatedList = [...prevTodoList];
      updatedList[index] = { ...newData };
      return updatedList;
    });
  };

  const addCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const removeCategory = (categoryToRemove) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category !== categoryToRemove)
    );
  };

  const onCategoryClick = (category) => {
    console.log("Clicked on category:", category);

    setSelectedCategory(category.toLowerCase());
  };

  const filteredTodoList = selectedCategory
    ? todoList.filter(
        (todo) => todo.category.toLowerCase() === selectedCategory
      )
    : todoList;

  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Todo List:", filteredTodoList);

  console.log("formData in App component:", formData); // Add this line

  return (
    <div>
      <div className="main-container">
        <TodoNav
          onSubmit={toggleFormVisibility}
          onAddCategory={addCategory}
          onRemoveCategory={removeCategory}
          onCategoryClick={onCategoryClick}
          categories={categories}
          selectedCategory={selectedCategory}
        />

        {/* Render TodoForm only if isFormVisible is true */}
        {isFormVisible && (
          <TodoForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}
        <div className="todo-item-container">
          {console.log("Filtered Todo List 2nd:", filteredTodoList)}
          {filteredTodoList.map((todoItem, index) => (
            <TodoItem
              key={index}
              index={index}
              updateTodoItem={updateTodoItem}
              {...todoItem}
              className="todo-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
