# [Folder strucutre in React]

1. node \_ module:

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

# what is single page Application?

A single Page Application is a web app that loads a single HTML documents and dynamically update the dom using js instead of requesting new pages from the server on each navigation.

# what is multi page application ?

A multi-page application (MPA) is a traditional web architeccture where every user interaction like clicking link or submitting a form- tiggers a full browser referesh to load a completely new HTML page from the server.

# diff between SPA and MPA?

aspect spa mpa

pages loads: one initial load full reaload page

perfo faster slower

seo hard naturally

developemt usually one codebase traditional
intial load slight high low

# what is client side routing?

client side rotuing is when the navigation between pages is handle by javaScript in the browser. Instead of requestion a new pages from the server, the js libraries (like react vue router)
update the url using history api and renders the apporpriate component/view without reloading page

# what is server side routing ?

server- side routing is the traditional methods where the browser sends a request to the server for every new url the server then generates and sends back a complete html page causing a full browser refersh

# what is react-router-dom?

React Router dom is a popular library for client -side routing in react application.
it allows you ti create SPA.

# what is createBrowserRouter and BrowserRouter.

### createBrowserRouter

a function introduced in react router v6.4+ that create a router instance using the history api.
it is the recommend way to define routes as it supports data API like loader , actions and fetchers.

### browser router

a component that wraps your app and enable client-side routing using the history API. it does
not support react router v6.4+ data apis like loader and actions

### diff btwn link and navlink?

### LInk

A component that renders and anchor tags and navigators(move) to a route without a full page
reload.

used in for general navigation (eg. "read more",button or a link in footer)

### navlink

same as link but applies an active class when its rotues matches the current url
used in navbar or dashboard tabs

# 37 what is an outlet?

a compnoent used in parent routes that acts as a placeholder where the matched child routes component get
rendered.

syntax:-->

function DashBoard(){
return(

<div>
<h1>DashBoard</h1>
<Oulet/ > {/\* child router renders here}
</div>
)
}

# 38 what is index props?

a boolean prop on a route that marks it as the default child route , render inside the parents Outlet when no other child rotue matches.

syntax:

const router=createBrowserRouter([
{
path:/"dashboard",
element:<Dashboard/>,
children:[
{index:true,element:<DashBoardHOme/>}, //render when path is exaclty /dashboard
{path:"setting",element:<Setting/>}
]
}
])
