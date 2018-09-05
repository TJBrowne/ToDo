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

// deleteHanlder(item, event) {
//   event.preventDefault();
//   this.props.onDelete(this.props.item[i].id)
// }

//removeText = (event) => {
        // const del = this.state.listItems.indexOf(listItems)
        // this.setState(prevState => {
        //   prevState.listItems.splice(del, 1)
        //   return prevState;
        // })
      //}