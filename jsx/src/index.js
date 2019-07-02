import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const getButtonText = () => {
    return 'Click on Me!';
  }
  
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);