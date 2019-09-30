import React, { useContext,useEffect } from 'react'
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User =(props)=> {
    const githubContext = useContext(GithubContext);
    const {getUser,getUserRepos,repos,user} = githubContext;

    useEffect(()=>{
        getUser(props.match.params.login);
        getUserRepos(props.match.params.login);
        
    },[])

        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            public_repos,
            following

        } = user
        return (
            <div>
                <img src={avatar_url} alt='' className='round-img' style={{ width: '60px' }} />
                <a href={html_url}>Go to profile</a>

                <ul>
            
                    <li>
                        {following}
                    </li>
                    <li>
                        {public_repos}
                    </li>
                    <li>
                        {login}

                    </li>
                    <li>
                        {public_repos}

                    </li>
                    <li>
                        {bio}

                    </li>
                    <li>
                        {blog}

                    </li>
                    <li>
                        {location}

                    </li>
                    <li>
                        {name}

                    </li>

                </ul>

                <Repos repos={repos}/>
            </div >
        )
    }

export default User
