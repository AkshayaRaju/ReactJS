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
   A component can be used as a HTML tag later.
	To create a component, there are 2 ways:
		1. Create a class that extends Component. This class should have a render() method that returns the JSX element to be rendered.
		2. Create a function and export it. This is also treated as a component. This uses lesser memory than (1)
   A component can have props and states.