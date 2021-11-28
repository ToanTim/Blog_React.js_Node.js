import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Bloger-team09</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <Link to="./" className="nav-link">Posts lists</Link>  
        </li> 
        <li className="nav-item">
        <Link to="./Create" className="nav-link">Create Posts</Link>  
        </li> 
        <li className="nav-item">
        <Link to="./user" className="nav-link">Create User</Link>  
        </li> 
      </ul>
      </div>
    </nav>
    )
  }
}