import React, { Component } from "react";
import "./style.css";
import Task from "../Task";


class Tasks extends Component {
    
    render() {
        return (
        <div className="task-list">Tasks
            <ul className="taskList">List{this.state.listItems.map(
                text => {
                    return (
                        <Task
                        key={text}
                        value={text}
                        />
                    )
                }
            )}              
            </ul> 
        </div>
        );
    }
}

export default Tasks;