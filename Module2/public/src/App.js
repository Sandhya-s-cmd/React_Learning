import React from 'react';
import './App.css';
import Display from './components/display';
import Counter from './components/counter';
import ListColours from './components/listColours';
import BookStore from './components/books/bookStore';

function App() {
  return (
    //  <div >
    //  <h2>App Component</h2>
    //  <Display></Display>
    //  </div>
    <React.Fragment>
      <h2>App Component</h2>
      <Display></Display>
      <Counter></Counter>
      <ListColours></ListColours>
      <BookStore></BookStore>
    </React.Fragment>
  );
}

export default App;
