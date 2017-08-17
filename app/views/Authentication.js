import React from 'react'
import Banner from './components/Banner'

class Authentication extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      username:"",
      password:"",
    }
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
                    onChange={this.onChange} />
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
                    onChange={this.onChange} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Authentication
