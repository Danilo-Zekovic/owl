import React from 'react'
import Banner from './components/Banner'

class Authentication extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      username:"",
      password:"",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
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
  }

  render(){
    return (
      <div>
        <Banner/>
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

export default Authentication
