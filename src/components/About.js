import UserClass from "./UserClass"
import React from "react";


class About extends React.Component{
  constructor(props){
    super(props)

    // console.log("parent constructor")
  }

  componentDidMount(){
    // console.log("parent DidMount ")
  }
  render(){
    // console.log("parent render")
    return (
      <div className="about items-center m-4">
        <h1>Know more about me</h1>
        <UserClass name={'First class'} location={'bbsr class'}/>
      </div>
    )
  }
}


export default About
