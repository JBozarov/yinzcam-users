import React, { Component } from 'react'
import Followers from '../followers/Followers'
import axios from 'axios'
import './SingleUser.css'
import Repositories from '../repositories/Repositories'



export class SingleUser extends Component {
   constructor(props){
      super(props)

      this.state = {
         userRep: {}
      }
   }

   goback = () => {
      this.props.history.push('/')
   }

   componentDidMount(){
      if (this.props.match.params.login){
         this.getUserRepository()
      }
   }

   getUserRepository = () => {
      axios.get(`https://api.github.com/users/${this.props.match.params.login}`)
      .then(res => this.setState({userRep: res.data}) )
   }
   render() {
      const { userRep } = this.state; 
      console.log('hit rep ', userRep)
      return (
         <div className='single-component' >
         <button className='goback-btn' onClick={this.goback} >Go back</button>
            {Object.keys(userRep).length>0 && 
               <div className='repository' >
                  <h2 className='name' key={userRep.id} >{userRep.name}</h2>
                  <img src={userRep.avatar_url} className='rep-image' />
                  <h1 style={{marginTop: '10vh'}} >Repositories </h1>
                  <Repositories repos_url={userRep.repos_url} />
                  <h1 style={{marginTop: '10vh'}} >Followers: </h1>
                  <Followers followers_url={userRep.followers_url} />
               </div>
             }
         </div>
      )
   }
}

export default SingleUser;