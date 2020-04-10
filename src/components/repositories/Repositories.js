import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Repositories.css'

const Repositories = props => {
   const [repositories, setRepositories ] = useState([])
   useEffect (() => {
      if (props.repos_url){
         axios.get(props.repos_url)
         .then(res => setRepositories(res.data))
      }
   }, [])

   console.log(repositories)
   return (
      <div className='user-repository-comp' >
         <table className='repos-table'>
            <thead><td colSpan='4' >Repositories Table</td></thead>
               <tr>
                  <th>Name</th>
                  <th>Url</th>
                  <th className='desktop-only' >Description</th>
                  <th>Private? </th>
               </tr>
               {repositories.length>0 && repositories.map(repository => 
               <tr key={repository.id} >
                  <td> {repository.name} </td>
                  <td> {repository.html_url} </td>
                  <td className='desktop-only' > {repository.description} </td>
                  {repository.private ? <td>Yes</td> : <td>No</td>}  
               </tr>
               )}        
         </table>
      </div>
   )
}

export default Repositories; 
