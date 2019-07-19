Recommended VSCode extensions:
1. Auto rename tag
2. Beautify
3. Bracket Pair Colorizer
4. ES7 React/Redux/GraphQL/React-Native snippets
5. Mithrel Emmit
6. Open in Browser
7. jslint

References:
1. caniuse.com
2. https://github.com/labfiles/citibank/
3. Transpilers -> Babel(www.babeljs.io) and Traceur(https://github.com/google/traceur-compiler/wiki/Getting-Started)
4. www.jsonlint.com

Javascript: It is a synchronous language that goes line by line.
1. let vs var vs const
	let -> block scope
	const -> block scope & constant type. When const collections are created, elements of different types can be added as members but collection type by itself cannot be changed.
	var -> gets hoisted and hence have global scope
	let & const gets hoisted and goes into TEMPORAL DEAD ZONE and hence not visible outside.	

2. Rest Argument vs Spread Operator (...)
	Rest Argument -> used when defining a function. When a function's argument is denoted with ..., it means variable number of arguments can be used while calling the function.
	Spread Operator -> used when invoking a function. When a function is called with ... collection parameter, the parameter gets spread and used internally to call the function.

3. call, apply & bind
   Ways to call a function by itself, passing the "this" keyword as argument. This is used to resolve scope when using nested functions inside class members.
   .apply() and .call() are executed immediately, while .bind() returns a function, which can be executed at a later time.
   Instead, arrow operator => could be used to sometimes to resolve scope.

4. => function
   Resolves scope as it uses parent scope.
   Not advisable to use nested arrow functions.

5. Array Methods
   sort()
   forEach() -> accepts callback function with 3 arguments (val -> currentvalue, required;index -> index of current value, optional;arr -> array object being used, optional) and executes the operation
   map() -> similar to forEach() but returns a variable of type array
   filter() 
   reduce() -> apply a function on all the elements of the array and finally returns a single value.
   reduceRight()
   indexOf()
   lastIndexOf()

6. Prototype
	An empty object automatically created when an object is created.

7. Class
	get keyword is used to define a getter method. This can be accessed from outside like a variable, not a function (without () at the end).
	set keyword is used to define a getter method. This can be accessed from outside like a variable, not a function (without () at the end).
	Convention is to use an underscore before the property name and just the name in the get/set.
	
8. Modules
   In Javascript, a class can be written as a separate module (.js file) and gets exported. This module can be imported wherever need and then used. 
   Not only class, any js object like array, variable, etc. can be exported as a module.
   However, while directly trying to run the script directly, this is unreachable due to CORS limitation since we are trying to access local file system from the browser that is following HTTP.
   To overcome this limitation, a web server is required to serve the module files. This can be setup using nodejs.