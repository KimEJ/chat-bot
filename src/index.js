import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

// function close() {
//   console.log("clicked");
//   window.parent.postMessage(
//     {
//       type: "close",
//     },
//     "*"
//   );
// }

const App = () => (
  <div>
    <button type="button" className={"btn-close"} onClick={() => {
      console.log("clicked");
      window.parent.postMessage(
        {
          type: "close",
        },
        "*"
      );
    }} style={{float: "right"}} aria-label="Close"></button>
    <Hello name="CodeSandbox" />

  </div>
);

render(<App />, document.getElementById('root'));
