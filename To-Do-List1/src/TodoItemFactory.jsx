// TodoItemFactory to create todoList items
class TodoItemFactory {
  createTodoItem(title, description, dueDate, priority, notes, category) {
    return {
      title,
      description,
      dueDate,
      priority,
      notes,
      category,
    };
  }
}

export default TodoItemFactory;
