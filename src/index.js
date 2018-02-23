import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBNObCp1rZ1JIfkop4ngEykve5CH1hYVEA';

// Create anew component. This compnen should produce
//some HTML.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
