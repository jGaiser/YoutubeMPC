import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

function YoutubeMPCApp(props) {
  return (
    <div id='pageApp'>
      <div className='container top'>
        <div className='container left'>
          <YTAudioLoader />
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

class YTAudioLoader extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      URL: '' 
    }
  }

  handleChange(e) {
    this.setState({URL: e.target.value})
  }

  return (
    const url = this.state.URL;
    <fieldset>
      <input value={url} onChange={this.handleChange} />
    </fieldset>
  )
}

<div id='root'></div>

ReactDOM.render(
  <YoutubeMPCApp />,
  document.getElementById('root')
)