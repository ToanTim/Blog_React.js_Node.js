import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePost extends Component {
  constructor(props){
    super(props);

    this.onChangeUserName=this.onChangeUserName.bind(this);
    this.onChangeHeader=this.onChangeHeader.bind(this);
    this.onChangeContent=this.onChangeContent.bind(this);
    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state = {
      username   :'',
      content    :'',
      header     :'',
      description:'',
      date       :new Date(),
      users:[]
    }
  }

  componentDidMount() {
    this.setState({
      users:['test user'],
      username:'test user'
    })
  }

  onChangeUserName(e){
    this.setState({
      username:e.target.value
    })
  }

  onChangeContent(e){
    this.setState({
      content:e.target.value
    })
  }

  onChangeHeader(e){
    this.setState({
      header:e.target.value
    })
  }

  onChangeDescription(e){
    this.setState({
      description:e.target.value
    })
  }

  onChangeDate(date){
    this.setState({
      date:date
    })
  }

  onSubmit(e){
    e.preventDefault();

    const post = {
      username   :this.state.username,
      content    :this.state.content,
      header     :this.state.header,
      description:this.state.description,
      date       :this.state.date
    }

    console.log(post);

    window.location='/';
  }

  render(){
    return(
      <div>
      <h3>Create New Post</h3>
      <form onSubmit={this.onSubmit}>
        <div className="orm-group">
          <label>Username: </label>
          <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                  {
                    this.state.users.map(function(user){
                      return <option
                       key={user}
                       calue={user}>{user}
                       </option>;
                    })
                  }
          </select>
        </div>
        <div className="form-group">
          <label>Header: </label>
          <input type="text"
                 required
                 className="form-control"
                 value={this.state.header}
                 onChange={this.onChangeHeader}
          />
        </div>
        <div className="form-group">
          <label>Content:  </label>
          <input type="text"
                 required
                 className="form-control"
                 value={this.state.content}
                 onChange={this.onChangeContent}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
                 required
                 className="form-control"
                 value={this.state.description}
                 onChange={this.onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="create Blog" className="btn btn-primary"/>
        </div>
      </form>
      </div>
    )
  }
}