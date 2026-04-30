# [Folder strucutre in React]

1. node\_ module:

--> this is a folder automativally crreated when you run npm install or yarn install

--> it contains all the installed dependencies package your project needs including react vite ESlint and any third party library

# Important:-

never edits files inside it manually and do not commit it to the git(it usually ignored via .gitignore)

ex---> axios ,react, vite

2. public
   Folder for static files(like image,features) that are saved as is.
   ex---> svg
   gitignore:-->fike that tells git which files/folder to ignore (gitignore)
   ex--> node_module,.env

3. what is ESlint.config.js

--is the configuration file for ESlint a popular tool that analyzes your js/ts code for the error bugs and style issues.

--ESlint.config.js tells ESlint how to check your code and what rules to follow

4. package.json

   it is the most Important file in any js node.js project
   it act likes the identity card of your project.

what it contains
project name,version,description

all dependencies (package) your project needs
script like(npm run dev, npm run build)

5. package-lock.json
   it is an auto generated file crreated by npm.
   it record the exact version of every package and sub package installed

# why it exsist?

to ensure everyone on the team get the same exact version of packages 6. readme.md
A markdown file that serves as the documentation for your project

7. vite.config.js
   configuration file for vite (build tool & dev serves).

   # what is state ?

   state in react is an internal mutable data structure that represent the dynamic data of a component..
   whenever state varible changes react will re render the components.

# Difference between state and props ?

props are immutable
props are used for passing data from one component to another component
props are owned and controlled by the parent compononent.

state.

state is mutable
state is internal component
the compnoent that declares it can direclty read or update it
state update trigger re- render

# what is Hooks

hooks are special built in function in react that allows you to use state and other react features (like lifecyle methods, context refs ,etc ) in function components.

features::-->

Hooks introduced in react 16.8
hooks allow function components to be stateful
hook start with use
enable better code reuse..

# what is useState Hooks

1- useState is a built in react hooks that allows you to add and manage local state in functional components

it return an array with two elements the current state value and a function to update the state.

sytnax:::::-

const[state,setState]=useState(initialValue);

state-> current value of the state (read only)
setState-function used to update the state
initialValue-> intial value of the state (can be number ,string,boolean ,object,array)

# what is Batching

batcvhing in react is the process where react groups multiple state update into a single re - render instead of re rendring the component after every indivdual state upadte.

this imporves performance by reducing unnecessary re - renders.

