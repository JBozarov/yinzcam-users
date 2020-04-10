import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SingleUser from './components/singleUser/SingleUser'
import Users from './components/users/Users'

export default (
   <Switch>
      <Route exact path='/' component={Users} />
      <Route path='/single/:login' component={SingleUser}/>
   </Switch>
)