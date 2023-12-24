import React from "react";
import TodoItem from "./TodoItem";

// TodoItemFactory to create todoList items
class TodoItemFactory {
  createTodoItem(title, description, dueDate, priority, notes) {
    return {
      title,
      description,
      dueDate,
      priority,
      notes,
    };
  }
}

export default TodoItemFactory;
