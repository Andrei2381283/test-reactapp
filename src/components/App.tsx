import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../types';
import { fetchPosts } from '../store/actions/postsActions';

function App() {

  const posts = useSelector((state: IState) => state.postsReducer.posts);
  console.log(posts);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          onClick={() => dispatch(fetchPosts())}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
