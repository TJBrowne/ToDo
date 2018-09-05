import React, { Component } from "react";
import "./style.css";
import NewTaskForm from "../NewTaskForm";
import Tasks from "../Tasks";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: " ",  // store what is passed as a value to input
      listItems: JSON.parse(localStorage.getItem("listItems"))|| [], // store each value that is passed to to-do list. added localStorage
    }
  } 
  //have each new text render in tasks
  newListItem = (newItem) => {
    this.setState(prevState => {
      prevState.listItems.push(newItem)
      localStorage.setItem("listItems", JSON.stringify(this.state.listItems))
      return prevState;
    })
   } 
   deleteHandler = item => {
    let i = this.state.listItems.indexOf(item)
    console.log(i);
    
    let listItems = [...this.state.listItems];

    listItems.splice(i, 1);
    localStorage.setItem('taskList', JSON.stringify(listItems));

    this.setState({
      listItems: listItems,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Get It Done! Task List</h1>
        <NewTaskForm newTask={this.state.text} updateText={this.updateText} newListItem={this.newListItem} />
        <div className="NewTask" />
        <Tasks className='button' taskList={this.state.listItems} deleteHandler={this.deleteHandler}/>
      </div>
    )
  }
}
export default App;