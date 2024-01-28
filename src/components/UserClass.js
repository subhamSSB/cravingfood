import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // u have to always use this keyword always in class
        this.state = {
            count:0,
            userInfo:{
                name:'dummy',
                location:'default',
                avatar_url:''
            }
        }
        console.log(this.props.name+"child Constructor")
    }

    async componentDidMount(){
        console.log(this.props.name+"child component Did Mont")
        const data = await fetch( `https://github.com/users/subhamssb`);
        const json = await data.json();
console.log(json)
        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate(){
        console.log("compo didUpdate"); // called later on at last
    }

    componentWillUnmount(){
        console.log("component Will Unmount")
    }
    render(){
        console.log(this.props.name+"child render")
        // debugger
        // const {name,location} = this.props;
        const {name,location,avatar_url} = this.state.userInfo;
        // const { count,count1,count2} = this.state;
        return(
            <div className="user-card "> 
            {/* <h1>Count : {count}</h1>
            
            <button onClick={() =>{
                // never update state variable directly
                // this.state.count = this.state.count +1; wrong 
                this.setState({
                    count: this.state.count + 1,
                    count1: this.state.count1 +1,
                    count2: this.state.count2 + 1
                })
            }}>Count Increase</button> */}
            <img src={avatar_url}/>
            <h2>Name : {name}</h2> 
            <h3>Location : {location}</h3>
            <h4>contact : savioursubham</h4>
        </div>
        )
    }
}

export default UserClass;// there is no difference in importing exporting in function and class based component