import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../main.css';
class Contact extends React.Component {
  render() {
    return(
<div>
<div className="welcome-section">
  <p className="page-header">Contact Us</p>
  <p className="contact-page-subtitle">Have a question about the application?
  Look at our <a href="#">Help Wiki</a> to see if there is already an answer.</p>
</div>


<div className="message-us-section">
  <p className="message-us-header">Message Us</p>
  <form className="message-us-form">
    <label for="email">Email</label>
    <input type="text" className="email-input"  name="email"/>
    <label for="message">Message</label>
    <input type="text" className="message-input"  name="message"/>
    <input className="message-send-btn" type="submit" value="Send"/>
  </form>
</div>


  <Link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  <Link rel="stylesheet" href="main.css"/>
</div>
    )
  }
}
export default Contact
