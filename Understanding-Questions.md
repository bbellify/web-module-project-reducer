# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
* The 1 button is connected to handleAddOne, which first creates an action object that is then sent through dispatch call. 

* The action in actions/index.js is called, where it is given a type:
    `const addOne = () => {return({type:ADD_ONE})}`

* The type is read by reducers/index.js, which it uses to tell which of the switch cases to execute and executes the following: 
    `case(ADD_ONE): return({ ...state, total: state.total + 1 })`

* This execution creates a new state, and since we called `dispatch` our app receives the new state with which it automatically rerenders.


* TotalDisplay shows the total plus 1.
