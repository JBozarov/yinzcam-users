import React, { Component } from 'react'
import axios from 'axios'

export class Followers extends Component {
   constructor(props){
      super(props)

      this.state = {
         followers: []
      }
   }

   componentDidMount(){
      if (this.props.foll_url)
      this.getFollowers(this.props.foll_url); 
   }

   getFollowers = url => {
      axios.get(url)
      .then(res => this.setState({ followers: res.data }))
   }
   render() {
      const { followers } = this.state; 
      return (
         <div>
            { followers.map(follower => (
               <div key={follower.id} ></div>
            )) }
         </div>
      )
   }
}

export default Followers
