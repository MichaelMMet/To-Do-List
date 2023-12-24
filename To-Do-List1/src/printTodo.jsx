function displayToDoItem() {
  console.log(`Title: ${todoItem.title}`);
  console.log(`Description: ${todoItem.description}`);
  console.log(`Due Date: ${todoItem.dueDate}`);
  console.log(`Priority: ${todoItem.priority}`);
  console.log(`Notes: ${todoItem.notes}`);
  console.log(`Completed: ${todoItem.completed}`);
}

// Exporting the displayDetails function
export { displayDetails };
