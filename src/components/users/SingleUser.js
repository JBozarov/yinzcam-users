import React, { Component } from 'react'
import axios from 'axios'

export class SingleUser extends Component {
   constructor(props){
      super(props)

      this.state = {
         user: []
      }
   }
   componentDidMount(){
      if (this.props.url){
         this.getUsers(this.props.url)
      }
   }
   getUsers = async (url) => {
      let result = await axios.get(`${url}`); 
      this.setState({user: result.data})
   }
   render() {
      
      // console.log(this.state.user)
      return (
         <div>
            <h1> {this.state.user.name} </h1>
         </div>
      )
   }
}

export default SingleUser
