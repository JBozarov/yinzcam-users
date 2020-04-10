import React, { Component } from 'react'
import axios from 'axios'
import './Followers.css'

export class Followers extends Component {
   constructor(props){
      super(props)

      this.state = {
         followers: []
      }
   }

   componentDidMount(){
      if (this.props.followers_url)
      this.getFollowers(); 
   }

   getFollowers = () => {
      axios.get(this.props.followers_url)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log(err))
   }
   render() {
      const { followers } = this.state;
      console.log('followers ', this.props.followers_url) 
      return (
         <div className='followers-list' >
            {followers.length>0 && followers.map(follower => (
               <div key={follower.id}  >
               <img src={follower.avatar_url} className='follower-image' />
               <h2> {follower.login} </h2>
               </div>
            )) }
         </div>
      )
   }
}

export default Followers
