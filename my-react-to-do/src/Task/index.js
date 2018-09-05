import React, { Component } from "react";
import "./style.css";

class Task extends Component {
    onClick = () => { 
        this.props.newListItem(this.state.text);
    }     
    render() {       
        return (
        <div className="each-task">
            <li className="task-item" >{this.props.item}</li>
            <input type='button' value='Delete' onClick={()=>this.props.deleteHandler(this.props.item)}/>
        </div>
        )
    }
}
export default Task;