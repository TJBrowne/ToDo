import React, { Component } from "react";
import "./style.css";

import NewTaskForm from "../NewTaskForm";
import Tasks from "../Tasks";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: " ",  // store what is passed as a value to input
      listItems: []  // store each value that is passed to to-do list
    }
  }
  
  //have each new text render in tasks
  newListItem = (newItem) => {
    this.setState(prevState => {
      prevState.listItems.push(newItem)
      return prevState;
    })
   } 
  componentDidMount = () => {
    let newTasks = JSON.parse(localStorage.getItem("taskList"));
      if (newTasks && newTasks.length>0){
        this.setState({
          listItems: newTasks,
        }) 
      }
    }

  render() {
    return (
      <div className="App">
        <h1>Get It Done! Task List</h1>
        <NewTaskForm newTask={this.state.text} updateText={this.updateText} newListItem={this.newListItem} />
        <div className="NewTask" />
        <Tasks className='button' taskList={this.state.listItems} />
      </div>
    )
  }
}
export default App;