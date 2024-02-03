import React from 'react';
import ReactDOM from 'react-dom';
import DrumComponent from './DrumComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrumComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});