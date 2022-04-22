import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

function YoutubeMPCApp(props) {
  return (
    <div id='pageApp'>
      <div className='container top'>
        <div className='container left'>
        </div>  

        <div className='container right'>
        </div>
      </div>

      <div className='container bottom'>
        <div className='container left'>
        </div>  

        <div className='container right'>
        </div>
      </div>
    </div>
  );
}

<div id='root'></div>

ReactDOM.render(
  <YoutubeMPCApp />,
  document.getElementById('root')
)