# react-todo

Your assignment is to create a to-do list app with react...from scatch! 

![](to-do.jpg)

### Requirements

- Create a new project using [Create React App Minimal](https://github.com/ericandrewlewis/create-react-app-minimal) as your starting point.
- Have at least three React compoments. *Tasks*, *Task*, and *NewTaskForm*, for example. Each React component will be given props for data it will display and methods it will invoke.
- Have separate folders and files for each component, exporting and importing as needed.
- Have Data for the application stored and updated using *state*.
- Have a form with an input field to add a to-do item to your task list. This input should be a controlled component. (Its value should be set using state and onChange it should update state )
- Have a delete button on each task list so the user can delete an item when it is complete.
- The app should have persistence in the browser. Use localStorage to store the user's task list so when they refresh the page their list of tasks at it appeared when they last viewed the app. (You will likely want to set localStorage each time you update the taskList array in your state, and also setState inside of componentDidMount with data you retrieve from localStorage when loading your page.)


### Bonus:

- Be able to mark as a task as "complete" which will move it to the bottom of the to-do list, and display it with a strike-through (or possible add it to a separate *completed* list if you so desire).  Maintain the ability to also delete a task entirely.

