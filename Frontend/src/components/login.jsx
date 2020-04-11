import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../main.css';
class Login extends React.Component {
  render() {
    return(
<div>



<div className="message-us-section">
  <p className="message-us-header">Login</p>
  <form className="message-us-form">
    <label for="email">Email</label>
    <input type="text" className="email-input"  name="email"/>
    <label for="email">Password</label>
    <input type="text" className="email-input"  name="email"/>
    <input className="message-send-btn" type="submit" value="Submit"/>
  </form>
</div>


  <Link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  <Link rel="stylesheet" href="main.css"/>
</div>
    )
  }
}
export default Login
