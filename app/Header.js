/**
  * Danilo Zekovic
  * Navigation bar that will appear on every views
  */

import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(){
    super()
    // transform initial state
    this.state= {
      transform:"navbar navbar-custom navbar-fixed-top"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop
    if (scrollTop < 2){
      this.setState({
        transform: "navbar navbar-custom navbar-fixed-top"
      });
    }else{
      this.setState({
        transform: "navbar navbar-custom navbar-fixed-top top-nav-collapse"
      });
    }
  }

  render() {
    return(
      <div>
        <nav className={this.state.transform} role="navigation" ref="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand page-scroll" href="/">
                <i className="fa fa-globe"></i>  <span className="light">Owl</span> Blog
              </a>
            </div>


            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul className="nav navbar-nav">

                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li><Link to='/'>Pocetna/Home</Link></li>
                <li><Link to='/clanci'>Clanci/Posts</Link></li>
                <li><Link to='/o-nama'>O Nama/About</Link></li>
                <li><Link to='/kontakt'>Kontakt</Link></li>
              </ul>
            </div>

          </div>

        </nav>
      </div>
    )
  }
}

export default Header
