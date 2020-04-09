import React, { Component } from 'react'
import Followers from '../followers/Followers'
import axios from 'axios'



export class Repository extends Component {
   constructor(props){
      super(props)

      this.state = {
         userRep: {}
      }
   }

   componentDidMount(){
      if (this.props.match.params.login){
         this.getUserRepository(this.props.match.params.login)
      }
   }

   getUserRepository = url => {
      axios.get(`https://api.github.com/users/${url}`)
      .then(res => this.setState({userRep: res.data[0]}) )
   }
   render() {
      const { userRep } = this.state; 
      console.log(userRep)
      console.log(this.props.match.params.login)
      return (
         <div>

         </div>
      )
   }
}

export default Repository


// <h1> {userRep.name} </h1> 
// <img src={userRep.avatar_url} className='user-image' />
// <Followers foll_url={userRep.followers_url} />