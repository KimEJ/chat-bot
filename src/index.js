import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
};

const App = () => (
  <div>
    <Hello name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById('root'));
