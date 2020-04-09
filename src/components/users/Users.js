import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import SingleUser from './SingleUser'
import './Users.css'
import axios from 'axios'
import data from '../../data'


class Users extends Component {
   constructor(props){
      super(props)

      this.state = {
         users: [],
         searchInput: '',
      }
   }

   componentDidMount(){
      // this.getAllUsers(); 
      this.setState({users: data})
   }

   getAllUsers = async() => {
      axios.get('https://api.github.com/users')
      .then(res => {
         this.setState({users: res.data})
         // for (let i=0; i<users.length; i++){
         //    users[i].aaaaa = 'some name '
         // }
      })
      .catch(err => console.log(err))
   }

   handleClick = login => this.props.history.push(`/ropository/${login}`)

   handleChange = input => this.setState({ searchInput: input })

   resetSearch = () => this.setState({searchInput: ''})

   render() {
      const { users, searchInput } = this.state; 
      let filteredUsers; 
      filteredUsers = users.filter(user => user.login.includes(searchInput))
      console.log(users)
      return (
         <div className='users-component' >
            <div className='search-box' > 
               <input className='search-input' 
                      placeholder='Search' 
                      value={searchInput} 
                      onChange={e => this.handleChange(e.target.value)} 
               /> 
               <button className='search-btn' onClick={this.resetSearch} >Reset</button>
            </div>
            <div className='users' >
               {users.length>1 && users.map(user => 
                  <div className='user-box' key={user.id} onClick={() => this.handleClick(user.login)}>
                     <img src={user.avatar_url} className='user-image' />
                     <p> {user.login} </p>
                     <SingleUser url={user.url} />
                  </div>
               )}
             
            </div>
         </div>
      )
   }
}


export default withRouter(Users); 



// <Name url={user.url} />