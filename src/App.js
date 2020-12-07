import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    wikis: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://api.microlearning.workcale.io/api/v1/microlearning/articles`;
    axios.get(apiUrl).then((wikis) => {
      const allWikis = wikis.data;
      console.log(allWikis);
      setAppState({ loading: false, wikis: allWikis });
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Workcale - Microlearning</h1>
      </div>
      <div className='wiki-container'>
        <ListLoading isLoading={appState.loading} wikis={appState.wikis} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by bdridi Workcale
        </div>
      </footer>
    </div>
  );
}

export default App;
