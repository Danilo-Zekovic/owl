import React from 'react'
import axios from 'axios'

class Login extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      username:"",
      password:"",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLoginClick(event){
    console.log(this.state)
    // after loging in use Redirect to go to the requested page
    // that page view will be passed down by props
    console.log("<<<< AUTHENTICATE CLICKED >>>>");
    console.log(this.state)
    axios({
      method: 'post',
		  url: '/login',
		  data: this.state
    })
    .then(response => {
      console.log(response);
			if (response.data.success) {
        console.log("<<<< SUCCESS >>>>");
        console.log(response.data);
        sessionStorage.setItem('loggedin', true);
        this.props.handleLogin()
			} else {
        console.log("<<<< SOME ERROR >>>>");
        console.log(response.data);
			}
		})
		.catch(function (response) {
		  if (response instanceof Error) {
		    // Something happened in setting up the request that triggered an Error
		    console.log('Error', response.message);
		  }
		})
  }

  checkLogin(){
    axios({
      method: 'get',
		  url: '/loggedin'
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function (response) {
		  if (response instanceof Error) {
		    // Something happened in setting up the request that triggered an Error
		    console.log('Error', response.message);
		  }
		})
  }

  render(){
    return (
      <div>
        <div className="container text-center">
          <br/>
          <h1>Login</h1>
          <br/>
          <div className="jumbotron col-md-6 col-md-offset-3">
            <form>
              <div className="row">
                <div className="form-group col-md-6 col-md-offset-3">
                  <label>Username/Korisnicko ime: </label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 col-md-offset-3">
                  <label>Password/Lozinka: </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="row">
                <a className="btn btn-primary" onClick={this.handleLoginClick}>Login/Prijavi se</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
