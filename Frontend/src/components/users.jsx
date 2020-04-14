import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../main.css';
import Doctor from '../doctor_image.jpeg';
class Users extends React.Component {
  render() {
    return(
<div>
<div className="welcome-section">
  <p className="page-header">About MLPDA</p>
  <img src={Doctor} alt="doctor_image" width="512" height="272"/>
</div>


<div className="about-statement-section">
  <p>MLPDA is a platform used by doctors and other health professionals
to find out whether or not a patient has Pnuemonia. The application
uses a machine learning algorithm to calculate the probability of an
individual having Pneumonia. All that is needed is an X-ray image of
the lungs.</p>
</div>


<div className="have-X-ray-section">
  <p className="have-x-ray-header">Have an X-Ray?</p>
  <p className="have-x-ray-statement">Login or Sign Up if your patient has Pneumonia</p>
  <div className="have-x-ray-button-section">
    <Link to="/login" className="btn btn-primary x-ray-btn login-btn" role="button">Login</Link>
  </div>
</div>


  <Link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  <Link rel="stylesheet" href="main.css"/>
</div>
      )
    }
}
export default Users
