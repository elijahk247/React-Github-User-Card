import React from 'react'

const Follower = props => {
  return(
    <div className='followers'>
      <h3>{props.follower.login}</h3>
        <img src={props.follower.avatar_url} alt='Github Avatar' />
    </div>
  )
}

export default Follower