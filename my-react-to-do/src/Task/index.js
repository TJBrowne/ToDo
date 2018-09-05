import React, { Component } from "react";
import "./style.css";

class Task extends Component {
    
    onClick = () => {
        // event.preventDefault(); 
        this.props.newListItem(this.state.text);
    }
    delete=(item)=>{
        //call delete from parent here
        this.props.delete(this.state.item);
        console.log(item);
    }

    //removeText = (event) => {
        // const del = this.state.listItems.indexOf(listItems)
        // this.setState(prevState => {
        //   prevState.listItems.splice(del, 1)
        //   return prevState;
        // })
      //}
      
    render() {       
        return (
        <div className="each-task">
            <li className="task-item" >{this.props.item}</li>
            <input type='button' value='Delete' onClick={this.delete(this.props.item)}/>
        </div>
        )
    }
}
export default Task;