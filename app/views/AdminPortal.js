import React from 'react'
import Loading from './components/Loading'
import Belt from './components/Belt'
import Upload from './components/NewPost'
import PostsList from './components/PostsList'
import Logout from './components/Logout'

class AdminPortal extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      styleMenu:{
        'font-size':30 + 'px',
        cursor:'pointer'
      },
      sidenavWidth:'0',
      isOpen:false,
      mySidenav:"sidenav col-md-2 col-sm-12",
      adminView:<Loading/>
    }
    this.openCloseNav = this.openCloseNav.bind(this)
    //this.closeNav = this.closeNav.bind(this, true)
  }

  openCloseNav(e) {
    //this.setState({sidenavWidth:"250px"});
    if(this.state.isOpen){
      this.setState({
        mySidenav:"sidenav sidenav-close",
        isOpen:false
      });
    }else{
      this.setState({
        mySidenav:"sidenav sidenav-open",
        isOpen:true
      });
    }
  }

  /*closeNav(e) {
    //this.setState({sidenavWidth:"0"});
    this.setState({
      mySidenav:"sidenav sidenav-closed"
    });
  }*/

  render(){
    return(
      <div className='container-fluid' >
        <div className='row'>

          <div id="mySidenav" className={this.state.mySidenav}>
            {/*<a href="javascript:void(0)" className="closebtn" onClick={ this.openCloseNav() }>&times;</a>*/}
            <a href="#" onClick={() => this.setState({adminView:<Loading/>})}>Pregled</a>
            <a href="#" onClick={() => this.setState({adminView:<PostsList/>})}>Clanci</a>
            <a href="#" onClick={() => this.setState({adminView:<Upload/>})}>Napisi Clanak</a>
            <a href="#" onClick={() => this.setState({adminView:<Logout handleLogout={this.props.handleLogout}/>})}>Logout</a>
          </div>

          <div className="col-md-10 col-sm-12">
            {/* view that is changed by clicking the side menu options */}
            {this.state.adminView}

            {/*<span style={{fontSize:14 + 'px', cursor:'pointer'}} onClick={ this.openCloseNav() }>&#9776; open</span>*/}
          </div>

        </div>
      </div>
    )
  }
}

export default AdminPortal
