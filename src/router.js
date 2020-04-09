import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Repository from './components/repository/Repository'
import Users from './components/users/Users'

export default (
   <Switch>
      <Route exact path='/' component={Users} />
      <Route path='/ropository/:login' component={Repository}/>
   </Switch>
)