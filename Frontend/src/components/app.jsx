import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../main.css';
import Scan from '../pneumonia_mri_scan.jpg';
import Login from './login';
class App extends React.Component {

  async componentDidMount() {
     try {
       const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
       const todos = await res.json();
       this.setState({
         todos
       });
     } catch (e) {
       console.log(e);
     }
   }

  render() {
    return (

<div>
<div className="welcome-section">
  <p className="page-header">Welcome to MLPDA</p>
  <img src={Scan} alt="mri_scan" width="512" height="272"/>
  <p className="welcome-page-subtitle">The Machine Learning Pneumonia Detection Application</p>
</div>


<div className="have-X-ray-section">
  <p className="have-x-ray-header">Have an X-Ray?</p>
  <p className="have-x-ray-statement">Login or Sign Up if your patient has Pneumonia</p>
  <div className="have-x-ray-button-section">
    <Link to="/login" className="btn btn-primary x-ray-btn login-btn" role="button">Login</Link>
  </div>
  </div>


  <Link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></Link>
  <Link rel="stylesheet" href="main.css" />
</div>
    )
  }
}
export default App
