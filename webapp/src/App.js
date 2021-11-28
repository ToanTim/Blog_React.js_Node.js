import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import PostList from "./components/post-list.component";
import EditPost from "./components/edit-post.component.js";
import CreatePost from "./components/create-post.component";
import CreateUser from "./components/create-user.component";



function App()
{
  return (
    <Router>
     <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component={PostList}/>
      <Route path="/edit/:id" exact component={EditPost}/>
      <Route path="/Create" exact component={CreatePost}/>
      <Route path="/user" exact component={CreateUser}/>
     </div>    
    </Router>
  );
}

export default App;
