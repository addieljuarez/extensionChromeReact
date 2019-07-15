// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


  
  


class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            url: 'https://gist.githubusercontent.com/addieljuarez/5518083/raw/14c5ecf04bae5cd873754dd5359efacb9dcd478c/gistfile1.json',
            method: '',
            response: '',

        }
    }


    
    
    _onSelect(_result){

    }

    changeUrl(e){
        this.setState({
            url: e.target.value
        });
    }

     sendRequest(){
        const that = this;

        if(this.state.url != ''){
            fetch(this.state.url, {
                method: 'GET',
            })
            .then(result => result.json())
            .then(function(_data){
                console.log(_data);
                that.setState({
                  response: JSON.stringify(_data)
                });
            })
            .catch(function(error){
                
                that.setState({
                  response: JSON.stringify(error)
              });
              console.log(error);
            });
                
        }else{
            alert('pon una url primero');
        }
        
        
    }

    render() {

        const options = [
            'GET'
        ];
        const defaultOption = options[0];
        return (
            <div className={'my-extension'}>
                {/* url */}
                <input placeholder='url' value={this.state.url} onChange={this.changeUrl.bind(this)}></input>
                <br></br>
                {/* method */}
                <Dropdown options={options} onChange={this._onSelect.bind(this)} value={defaultOption} placeholder="Select an option" />
                <br></br>
                {/* Content Type */}
                <button onClick={this.sendRequest.bind(this)}>Request</button>
                <br></br>
                <h5>{this.state.response}</h5>
            </div>
        )
    }
}

// const app = document.createElement('div');
// // app.id = "extension-root";
// document.body.appendChild(app);
// ReactDOM.render(<Main />, app);

export default Main;