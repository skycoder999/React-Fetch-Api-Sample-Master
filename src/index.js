/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'
/*import  fetchAPI from './components/fetchAPI/fetchAPI.js' */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

export default class App extends React.Component {

  state = {
    loading: true,
    person: null,
};

async componentDidMount(){
  const url = "https://api.randomuser.me/";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({person: data.results[0], loading:false})
}



  render() {


if (this.state.loading) {
  return <div>Loading...</div>
}

if (!this.state.person) {
  return <div>Didn't found any result...</div>
}


    return (
      <div className="App" css={{ color: 'darkgray' }}>
        {this.state.loading  || !this.state.person ?  (
        <div>...loading</div>) :( 
           <div className="container">
             <div className="row">
               <div className="col-md-4 offset-md-4">
                 <div className="card" style={{ height: 400, textAlign:"left", padding: 20, marginTop: 50}}>
                   <img src={this.state.person.picture.large} className="img-fluid"/>
                   <br/>
                   <span className="label">Name:</span>
                  <p>  {this.state.person.name.last}</p> 
                  <span className="label">Location: </span> 
                 <p> {this.state.person.location.street.name}</p> 
                 <span className="label">Email:</span>
                 <p className="emailtxt"> {this.state.person.email}</p>
                 </div>
             </div>
           </div>
         </div>
          )}
      </div>
    )
  
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
