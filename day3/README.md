REACT:
References:
1. https://facebook.github.io/create-react-app/docs/advanced-configuration
2. Canary - developer browser from Google

Commands to install and use REACT:
1.  npm install -g create-react-app
	-g represents globally to make the installed package available globally in the terminal.
	This command will install the create-react-app in the node_modules directory.
2. create-react-app -V
	Returns version of react.

Libraries:	
1. react -> To build components and enable communication between them.
2. react-dom -> Renders the components as DOM
3. react-scripts -> Takes all the js files and transpiles them using Babble and configure it into webpack in order to run via a web server.
4. react-router-dom -> To enable routing
	
Steps to create & run a new REACT project:
1. create-react-app firstapp
   Creates a new project called firstapp
2. Optional 
   By default, the project runs on port 3000. This can be changed in node_modules/react-scripts/scripts/start.js DEFAULT_PORT configuration.
3. npm start
   Starts the project rendering.
   
Notes:
1. import React,{Component} from 'react'
   Here "React" is simply the user given name. Can be anything. 'react' exports a default class that gets used here.
   import XYZ from 'react' will also work. 
   Component is not the default class of pkg 'react' and hence should be enclosed in {} with correct name&case.
   
2. Understanding default class 
	export default class Hero{
	}
	Now, import {Hero} from './Hero.js' is not necessary and can simply be anything like import Hello from './Hero.js'
	
3. Adjacent JSX elements must be wrapped in an enclosing tag. 
   Can be <div></div> or <></> or <React.Fragment></React.Fragment>. Here React is the user given name for the 'react' import.
   JSX executes blocks enclosed within {} as Javascript.

4. SASS, LESS, STYLUS, CSS can be used for styling.	

5. Elements -> Components -> Composition (Composite Component)

6. Components:
    6.1 A component can be used as a HTML tag later.
	6.2 To create a component, there are 2 ways:
		1. Create a class that extends Component. This class should have a render() method that returns the JSX element to be rendered.
		2. Create a function. This is also treated as a component. This uses lesser memory than (1)
    6.3 A component can have props and states.
        1. Props are attributes a component expects from outside. State is maintained inside a component by itself.
        2. Props can be static, default, required, etc. There is no default state.
        3. Props are immutable by default. State can be changed by the component.

7. Lifecycle methods (Example: render()) of a component only can work with "this". Other methods like event handlers won't be able to access this.xyz.
To resolve this issue, the scope of the component ("this") can be passed using
    7.1 Bind at the calling portion -> Not efficient, as bind happens at each call
    7.2 Fat arrow function -> Not efficient
    7.3 Do the binding at the constructor -> One time, REACT recommended.

8. Events
    Event handlers are in camel case & prefixed with "on". Example: onClick, onChange, onFocus.
    Events can be propagated from parent to child & vice versa by means of props.
    
9. Forms
    An action of # indicates that the form stays on the same page, i.e, the form is submitted to the same page.
    The onSubmit callback gets called when you submit the html form by either clicking on any button or just by pressing “enter” while focused in one of the input fields.

    Steps to create a form:
    Step1: Write event listener for onSubmit that listens to the submit event.
           Customize this event handler to prevent default actions that the browser performs.
           Example: <form action="#"> -> By default, the browser submits the form to itself once form is completed. To prevent this, we can use evt.preventDefault()
    Step2: Write appropriate event handlers for various input fields and buttons.

10. Routes
    Gives user multiple page feeling while actually there is only one underlying page.
    Makes use of react-router-dom library.
    exact keyword is used to exactly match the path and component.
    <Switch> is used to group routes together. It can be used for dynamic route parameters.
    <Link to> is react equivalent of <a href> except that it doesn't refresh the page.
    Params can be sent in the link and route can be defined with ":" to accept param of any type. The value sent can be read in the component using props.match.params.xyz