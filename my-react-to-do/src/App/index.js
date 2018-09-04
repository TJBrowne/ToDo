import React, { Component } from "react";
import "./style.css";

import NewTaskForm from "../NewTaskForm";
import Task from "../Task";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: " ",  // store what is passed as a value to input
      listItems: []  // store each value which is passed to to-do list
  }
}

handleChange = (event) => {
  event.preventDefault();
  let listItems = this.state.text;
  console.log(listItems);

// updateInputValue = (value) => {
//   this.setState({
//     listItems: listItems,
//    })
//   }
 
}
  render() {
    return (
    <div className="App">
      <h1>J's Custom To-Do List</h1>
      <Task listItems ={this.state.listItems}/>
      <NewTaskForm handleChange ={this.handleChange}/>
        <div className="NewTask"/>
        {this.state.listItems.map((listItems) => {
            return (
              <App className='button' key={listItems} handleChange={this.handleChange} />
            )
          }
          )}
    </div>
    )
  }
}
export default App;










//1) push task into "this.state.listItems" 
//2) pass "this.state.listItems" down to "Tasks" component As prop
//3) map over listItems in "Tasks" to return 'Task' component for each task
// and display in render