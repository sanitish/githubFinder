import React, { useContext,useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';

import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const HomePage =(props)=> {
 
    const githubContext = useContext(GithubContext);
    useEffect(()=>{
        githubContext.homePageFill()
    },[])
        if (githubContext.loading) {
            return (
                <Spinner/>
            )
        } else {
            return (
                <div style={userStyle}>
                    {githubContext.users.map(user => (
                        <div><UserItem key={user.id} user={user} /></div>
                    ))}
                </div>
            );
        }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default HomePage;