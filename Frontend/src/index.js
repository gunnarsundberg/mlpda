import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import Users from './components/users';
import Contact from './components/contact';
import Login from './components/login';
import Imageupload from './components/imageupload';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './main.css';

const routing = (
  <Router>
    <div>
     <nav className="navbar navbar-expand-lg navbar-light nav-bg">
     <Link to='/' className="navbar-brand">MLPDA</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse navbar-seperation" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

       <li className="nav-item">
        <Link className="nav-link" to ="/users">About</Link>
        <button className="navbar-toggler"  type="button" data-toggle="collapse" to="/about" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
       </li>

       <li className="nav-item">
        <Link className="nav-link" to ="/contact">Contact</Link>
        <button className="navbar-toggler"  type="button" data-toggle="collapse" to="/about" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
       </li>

       <li className="nav-item">
        <Link className="nav-link" to ="/imageupload">Imageupload</Link>
        <button className="navbar-toggler"  type="button" data-toggle="collapse" to="/about" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
       </li>
       </ul>
      </div>
      </nav>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      <Route path="/imageupload" component={Imageupload} />
      <Route path="/login" component={Login} />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
    <link rel="stylesheet" href="main.css"/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
