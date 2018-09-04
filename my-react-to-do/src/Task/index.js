import React, { Component } from "react";
import "./style.css";

class Task extends Component {
    
    render() {
        
        return (
        <div className="each-task">Task
            <li className="task-item" 
            listitems={this.props.listitems} 
            >{this.props.listitems}</li>
        </div>
        )
    }
}


export default Task;