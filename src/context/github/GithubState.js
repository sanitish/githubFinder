import React, { useReducer } from 'react';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import axios from 'axios';


const GithubState = (props) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        repo: [],
        loading: false,

    };
    const [state, dispatch] = useReducer(GithubReducer, initialState);
    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&
          client_id="4f129e6244a83a51d201"&
          client_secret="ea3e30497a3ba0106833167c920e04505e475137"`);

        dispatch({
            type: 'SEARCH_USERS',
            payload: res.data.items
        })
    }

    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?
          client_id="4f129e6244a83a51d201"&
          client_secret="ea3e30497a3ba0106833167c920e04505e475137"`)
        dispatch({
            type:'GET_USER',
            payload:res.data
        })
    }

    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=15&sort=cerated:asc&
          client_id="4f129e6244a83a51d201"&
          client_secret="ea3e30497a3ba0106833167c920e04505e475137"`)
        dispatch({
            type:'GET_REPOS',
            payload:res.data
        })
    }


    const onclear = () => {
        dispatch({
            type:'CLEAR_USERS'
        })
    }
    const homePageFill = async() => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users?
          client_id="4f129e6244a83a51d201"&
          client_secret="ea3e30497a3ba0106833167c920e04505e475137"`);

        dispatch({
            type: 'HOME_FILL',
            payload: res.data
        })
    }


    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                repo: state.repo,
                loading: state.loading,
                searchUsers,
                getUser,
                getUserRepos,
                onclear,
                homePageFill

            }
            }
        >
            {props.children}
        </GithubContext.Provider>
    );
}
export default GithubState;