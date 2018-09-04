import React, { Component } from "react";
import "./style.css";

class NewTaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text:''
        }
    }
    //create method with a parameter that will be run on input element change
    onChange = (event) => {
        this.setState({
            text: event.target.value
        })

    }

    onSubmit = (event) => {
        event.preventDefault()
        //create method on parent component that accepts "this.state.text"
        //from this component and inputs it into list of "Task" components
        this.props.handleChange(this.state.text);
        // this.setState({
        //     text: "",
        //     listItems:[this.state.items, this.state.text]
        // });
    }

    render() {
        return (
        <div className="NewTaskForm">NewTaskForm
        <form className="NewTask" onSubmit={this.onSubmit}>
            <input onChange={this.onChange} placeholder="New Task" />
            <button type="submit">Next Task</button>
        </form>
    
        </div>
        )
    }
}

export default NewTaskForm;