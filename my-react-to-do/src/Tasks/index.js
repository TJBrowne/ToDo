import React, { Component } from "react";
import "./style.css";
import Task from "../Task";


class Tasks extends Component {
    
    render() {
        return (
        <div className="task-list">
            <h2>Tasks</h2>
            {this.props.taskList.map(
                text => {
                    return (
                        <ul className="taskList" key={text}>
                        <Task                        
                        item={text} 
                        deleteHandler={this.props.deleteHandler}               
                        />
                        </ul> 
                    )
                }     
            )}         
        </div>
        );
    }
}

export default Tasks;