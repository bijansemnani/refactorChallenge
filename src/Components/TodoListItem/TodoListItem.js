import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index, 10);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index, 10);
    this.props.markTodoDone(index);
  }
  render() {
    var todoClass = this.props.item.done ? "todoItem done" : "todoItem undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          <span>{this.props.item.value}</span>
          <span class='date'>{`Added: ${this.props.item.date}`}</span>
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
