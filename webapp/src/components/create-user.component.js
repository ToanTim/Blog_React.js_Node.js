import React,{Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props){
    super(props);

    this.onChangeUserName=this.onChangeUserName.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state = {
      username   :'',
      email      :'',
      password   :'',
      users:[]
    }
  }

  onChangeUserName(e){
    this.setState({
      username:e.target.value
    })
  }

  onChangeEmail(e){
    this.setState({
      email:e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      password:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const user_create = {
      username     :this.state.username,
      email        :this.state.email,
      password     :this.state.password,
    }

    axios.post("http://localhost:5000/api/user/create_user",user_create)
      .then (res=> console.log(res.data));

    this.setState({
      username:'',
      email:'',
      password:'',
    })
    //window.location='/';
  }

  render(){
    return(
      <div>
        <p>Create New User</p>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Email: </label>
            <input type="text"
                   required
                   className="form-control" 
                   value={this.state.email}
                   onChange={this.onChangeEmail}
                   />
          </div>

          <div className="form-group">
            <label>Username: </label>
            <input type="text"
                   required
                   className="form-control" 
                   value={this.state.username}
                   onChange={this.onChangeUserName}/>
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input type="text"
                   required
                   className="form-control" 
                   value={this.state.password}
                   onChange={this.onChangePassword}/>
          </div>

          <div className="form-group">
          <input type="submit" value="create Account" className="btn btn-primary"/>
        </div>
        </form>
      </div>
    )
  }
}