import React from "react";

// TodoItem class representing a todoList item
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      editing: false,
      updatedData: { ...props },
    };
  }

  //checks if  the prevProps are equal to the current and if not they get updated
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        updatedData: { ...this.props },
      });
    }
  }

  markAsCompleted() {
    this.setState({ completed: true });
  }

  startEditing() {
    this.setState({ editing: true });
  }

  finishEditing() {
    this.setState({ editing: false });
    this.props.updateTodoItem(this.props.index, this.state.updatedData);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      updatedData: {
        ...prevState.updatedData,
        [name]: value,
      },
    }));
  }

  render() {
    const { title, description, dueDate, priority, notes } =
      this.state.updatedData;

    if (this.state.editing) {
      return (
        <div className="edit-container">
          <div className="edit-part">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="edit-part">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              id="desc"
              name="description"
              value={description}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="edit-part">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="dueDate"
              value={dueDate}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="edit-part">
            <label htmlFor="prio">Priority:</label>
            <input
              type="text"
              id="prio"
              name="priority"
              value={priority}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>

          <div className="edit-part">
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              id="notes"
              name="notes"
              value={notes}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="edit-part">
            {" "}
            <button onClick={() => this.finishEditing()}>Save Changes</button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3>Title: {title}</h3>
        <p>Description: {description}</p>
        <p>Due Date: {dueDate}</p>
        <p>Priority: {priority}</p>
        <p>Notes: {notes}</p>
        <p>Completed: {this.state.completed ? "Yes" : "No"}</p>
        <button onClick={() => this.startEditing()}>Edit Info</button>
      </div>
    );
  }
}

export default TodoItem;
