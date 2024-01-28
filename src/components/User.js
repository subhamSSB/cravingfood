import { useState } from "react";
const User = (props) =>{
    const [count,setCount]  = useState(0);
    const [count2,setCount2]  = useState(1);
    const {name,location} = props;
    //when state change, we update the UI
    return(
        <div className="user-card"> 
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
            <h2>Name :{name}</h2>
            <h3>Location : {location}</h3>
            <h4>contact : savioursubham</h4>
        </div>
    )
}

export default User;