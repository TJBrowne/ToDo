import React, { Component } from "react";
import "./style.css";

class Task extends Component {
    
    onClick = () => {
        // event.preventDefault(); 
        this.props.newListItem(this.state.text);
    }
    // deleteHandler=(item)=>{
    //     //call delete from parent here
    //     this.props.deleteHandler(this.state.item);
    //     console.log(item);
    // }
      
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