import React from 'react'
import axios from 'axios'

class Logout extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      username:"",
      password:"",
    }
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick(event){
    console.log(this.state)
    // after loging out use Redirect to go to the requested page
    // that page view will be passed down by props
    console.log("<<<< LOGOUT CLICKED >>>>");
    console.log(this.state)
    axios({
      method: 'post',
		  url: '/logout'
    })
    .then(response => {
      console.log(response);
			if (response.data === "OK" && response.status == 200) {
        console.log("<<<< SUCCESS LOGOUT >>>>");
        console.log(response.data);
        sessionStorage.setItem('loggedin', false);
        this.props.handleLogout()
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

  render(){
    return (
      <div>
        <div className="container text-center">
          <br/>
          <h1>Logout</h1>
          <br/>
          <div className="jumbotron col-md-6 col-md-offset-3">
            <form>
              <div className="row">
                <h4>Put the name here</h4>
              </div>
              <div className="row">
                <a className="btn btn-primary" onClick={this.handleLogoutClick}>Logout/Odjavi se</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Logout
