import React, { Component } from "react";
import "./style.css";

class Task extends Component {
    
    onClick = () => {
        // event.preventDefault(); 
        this.props.newListItem(this.state.text);
    }
    delete=(item)=>{
        //call delete from parent here
        console.log(item);
    }

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