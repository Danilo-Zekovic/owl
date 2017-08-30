import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Banner from './components/Banner'
import Loading from './components/Loading'
import Login from './components/Login'

class Admin extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      isLoggedIn:false,
      loading:true
    }
    this.checkLogin = this.checkLogin.bind(this)
  }

  checkLogin(){
    // because you cannot use this.setState inside the promise
    // or at least I couldn't get it to work, set state in separate function
    const setLogin = (res) => {
      this.setState({
        isLoggedIn:res,
        loading:false
      })
    }

    // promise based http requests
    axios({
      method: 'get',
		  url: '/loggedin'
    })
    .then(function(response){
      console.log(response);
      if (response.data && response.data != 0){
        console.log("loged in");
        setLogin(true)
      }else{
        console.log("login please");
        setLogin(false)
      }
    })
    .catch(function (response) {
		  if (response instanceof Error) {
		    // Something happened in setting up the request that triggered an Error
		    console.log('Error');
        setLogin(false)
		  }
		})
  }
  // after rendering the component check is any user loggedin
  componentDidMount(){
    this.checkLogin()
  }

  render(){
    // display loading until component finds out is anyone loggedin
    if(this.state.loading){
      return (
        <div>
          <Banner/>
          <Loading/>
        </div>
      )
    }else if (this.state.isLoggedIn) {
      return (
        <div>
          <Banner/>
          <h1>Welcome Foo</h1>
        </div>
      )
    }else{
      return (
        <div>
          <Banner/>
          <Login handleLogin={this.checkLogin}/>
        </div>
      )
    }
  }
}

export default Admin
