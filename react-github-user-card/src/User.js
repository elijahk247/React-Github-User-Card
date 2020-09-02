import React from 'react'

// importing follower
import Follower from './Follower'

const Users = props => {
  return(
    <div>
      <div className='user-container'>
        <h3>{props.users.name}</h3>
        <img src={props.users.avatar_url} alt='Github Avatar' />
        <p>{props.users.location}</p>
        <p>{props.users.bio}</p>
      </div>

      <div className='followers-container'>
        {
          props.followers.map(follower => {
            return(
              <Follower key={follower.id} follower={follower} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Users;