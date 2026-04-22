import Card from "./Card";

const Parent=()=>{

     const player1={
        username:"Virat Kohli",
        age:36,
        team:"RCB",
        skill:"Batting",
        jersy:19

    }

     const player2={
        username:"Virat Kohli",
        age:36,
        team:"RCB",
        skill:"Batting",
        jersy:19

    }

     const player3={
        username:"Virat Kohli",
        age:36,
        team:"RCB",
        skill:"Batting",
        jersy:19

    }


return <div className="parent-component">


<Card {...player1}/>
<Card {...player2}/>
<Card {...player3}/>
    </div>

}
export default Parent;