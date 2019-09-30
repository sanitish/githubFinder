import React, { useState,useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = (props) => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const {users,onclear,searchUsers}=githubContext
  const onSubmit = (e) => {
        e.preventDefault()
       searchUsers(text)
        setText('')
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form className='from' onSubmit={onSubmit}>
                <input type='text' name='text' placeholder='enter username' value={text} onChange={onChange} />

                <input type='submit' name='search' value='search' className='btn btn-drak btn-block' />

            </form>
            {users.length>0 && <button className='btn btn-light btn-block' onClick={onclear}>clear</button>
            }

        </div>
    )
}
export default Search

