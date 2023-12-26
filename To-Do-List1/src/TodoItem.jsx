import React from "react";

// TodoItem class representing a todoList item
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  markAsCompleted() {
    this.setState({ completed: true });
  }

  markAsCompleted() {
    this.setState({ completed: true });
  }

  startEditing() {
    this.setState({ editing: true });
  }

  finishEditing() {
    this.setState({ editing: false });
    // Add logic to update the todo item with the new data
    // You can emit an event or callback to the parent component to handle the update
  }

  render() {
    const { title, description, dueDate, priority, notes } = this.props;

    return (
      <div>
        <h3>Title: {title}</h3>
        <p>Description: {description}</p>
        <p>Due Date: {dueDate}</p>
        <p>Priority: {priority}</p>
        <p>Notes: {notes}</p>
        <p>Completed: {this.state.completed ? "Yes" : "No"}</p>
        <button onClick={changeInfo}>Edit Info</button>
      </div>
    );
  }
}

export default TodoItem;
