import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Users.css'
import axios from 'axios'
// import data from '../../data'


class Users extends Component {
   constructor(props){
      super(props)

      this.state = {
         users: [],
         searchInput: '',
      }
   }

   componentDidMount(){
      this.getAllUsers(); 
      // this.setState({users: data})
   }


   //  componentDidUpdate(prevProps, prevState) {
   //    const { users } = this.state; 
   //    if (prevState.users !== users) {
   //       for (let i = 0; i<users.length; i++){
   //       users[i].name =  this.getUserName(`https://jsonplaceholder.typicode.com/users/${users[i].id}`).then(res => res.data)
   //       console.log('hit')
   //       }
   //    }
   // }

   //  getUserName = async(url) => {
   //    return await axios.get(url).then(res => res.data); 
   // }


   getAllUsers = () => {
      axios.get('https://api.github.com/users')
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err))
   }

   handleClick = login => this.props.history.push(`/single/${login}`)

   handleChange = input => this.setState({ searchInput: input })

   resetSearch = () => this.setState({searchInput: ''})


   render() {
      const { users, searchInput } = this.state; 
      let filteredUsers = users.filter(user => user.login.includes(searchInput))
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
               {users.length>0 && filteredUsers.map(user => 
                  <div className='user-box' key={user.id} onClick={() => this.handleClick(user.login)}>
                     <img src={user.avatar_url} className='user-image' />
                     <h1> {user.login} </h1>
                  </div>
               )}
            </div>
         </div>
      )
   }
}


export default withRouter(Users); 



// <Name url={user.url} />