# What is component Composition'

Component Composition is the partice of calling one component inside another component.

1.  Example

function Header(){
return <h1>Welcome<h1/>
}

function App(){
retrun(

        <div>
        <Header/>{header  component is called App component}
        </div>
    )

}

# What is props?

Props(short for properties) are a mechanism used to pass data from one component to another, typically in a unidirectional (top-down) flow from parent to child.

Example

//Parent passes props
<Greeeting name="alice" age={25}>

//child recive and use them
function Greeting({name,age}){
return <h1>hello {name} Your are {age} old</h1>
}

# why we use Props or characteristics of props?

Characteristics:

1.  immutable: a child component cannot modify its own props
2.  unidirectional: data flows only from parent to child
3.  any type: string,number,array object function even jsx
4.  destrutured: commonly destrutured in the funtion signature for clean code

UseCase

Pass data: send data from parent component to child
Reusabily: same component can be used multiple times with different data
Dynamic Content: Component show different Content based on props recive
Avoid Repetition: Write the component once, reuse it anywhere.
Communication: the only way for a parent to talk to a child component

# what is default props?

default props in react allows you to define fallback value for a components properties(props)

Example

function Greeeting({name="guest" age=18}){
return(

<h1>
Hello {name} your are {age} years old
</h1>
);

    <Greeeting/>
    Component call without passing props

}

# what is children props?

1. children props is a special bulit in property that allows you to pass Content between the opening and closing tags component .

2. Anything placed inside a components tags is automatically passed to that component as props children

3. children can be string number jsx element array or even function

Example

function Card({children}){
return <div className="card">{children}</div>
}

//Now you can put ANYTHING inside card component
<Card>

<h2>Title</h2>
<p>Description here</p>

</Card>

# What is props drilling?

1. props drilling is the process of passing data (props) through multiple layers of component to reach a deeply nested child that need its even if the intermediate component do not use that data

Note: to Avoid props drilling we use context API react state management

# what is render prop?

render props is when you pass a function as a prop to a component and that component calls
the function to render something

# what is useEffect

the useeffect hook is a built in react function that allows you to perform sude effects in the functuonal components

side effects are operations that interact with system outside of react (Like api call.)

1. no dependecny array-> runs after every render

userEffect(()=>{
console.log("runs after every render);
});

2. Empty dependency array-> runs once on mount

useEffect(()=>{
console.log("runs only once like the componentDidMount);
},[]);

3. with dependency runs when those value changes

useEffect(()=>{
console.log("runs when the count or name changes");

},[count,name]);

# 27. Diff btwn useState and useEffect Hooks?

useState:
used to add and manage state(data) in funcitonal components
return an array with 2 value {currentstate,setstate}
updating state with setState() triggers a re-render of the component
preserves value between re-render

userEffect:

used to perform side effects(actions outside normal rendering)
runs after the component render(and after paint in most cases)
common uses: data fetching,dom manupulation,subscriptions,timers,event listners
the useEffect hook itself does not return any value(it returns undefined).

what is react lifecycle methods in FBC?

every react component goes through 3 phase in its life

MOUNT--> UPDATE-->UNMOUNT
(born) (change) (dies)

phase 1: MOUNTING

componnent is created and inserted into the dom for the first time.
on mounting phase useEffect runs only once after component is added to DOM

useEffect(()=>{
console.log("runs once, like componentDidMount");
},[]);

phase 2:UPDATING
component re-render due to state or prop changes
on updating phase useEffect runs when a specific value changes

useEffect(()=>{
console.log("runs when name or count changes");
},[name,count]);

phase3: UNMOUNTING

component os removed from the dom
useEffect cleanup function will be called in this phase

useEffect(()=>{
console.log("runs when count or names changes");

return()=>{
console.log("cleanUp function"); //this cleanup function will be called
}

},[])
