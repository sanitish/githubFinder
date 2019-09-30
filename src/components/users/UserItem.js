import React from 'react'
import {Link} from 'react-router-dom';
const UserItem = ({user : {avatar_url , alt, login, html_url}}) => {

        return (
            <div className='card text-center'>
                <img  src={avatar_url} alt={alt} className='round-img' style={{width:'60px'}}/>
                <h3>{login}</h3>
                <div>
                    <Link to ={`/user/${login}`} className='btn btn-dark btn-sm my-1'>more</Link>    
                </div>
            </div>
        )
}

export default UserItem
