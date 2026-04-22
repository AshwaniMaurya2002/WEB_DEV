import Card from "./Card";

const Parent = () => {
  const user = {
    username: "Virat Kohli",
    age: 36,
    team: "RCB",
    skill: "Batting",
    jersy: 19,
  };

  return <div>

  {/* method 2 */}
  <Card  {...user}/>
  {/* method 3 */}
  <Card username={user.username}  age={39} />

  {/* method 4 */}
  <Card/>

  </div>;
};

export default Parent;
