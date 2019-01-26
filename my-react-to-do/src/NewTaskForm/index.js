import React, { Component } from "react";
import "./style.css";

class NewTaskForm extends Component {
    constructor(props) {
        super(props);
    }
    //create method with a parameter that will be run on input element change
    updateText = (event) => {
        this.setState({
            text: event.target.value,
        })
    }
    //from this component and inputs it into list of "Task" components
    onSubmit = (event) => {
        event.preventDefault();
        this.props.newListItem(this.state.text);
    }
    render() {
        return (
            <div className="NewTaskForm">
                <form className="NewTask" onSubmit={this.onSubmit}>
                    <input className="input" type="text" onChange={this.updateText} />
                    <button className="btn" type="submit">Submit Task</button>
                </form>
            </div>
        )
    }
} 
export default NewTaskForm;