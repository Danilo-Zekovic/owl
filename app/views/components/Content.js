import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => (
  <div className="row text-center">

    <div className="col-md-4 col-sm-12">
      <Link to="o-nama"><div className="content-square"><i className="fa fa-rebel fa-4x"></i><h3>O Nama</h3></div></Link>
    </div>

    <div className="col-md-4 col-sm-12">
      <Link to="clanci"><div className="content-square"><i className="fa fa-book fa-4x"></i><h3>Clanci</h3></div></Link>
    </div>

    <div className="col-md-4 col-sm-12">
      <Link to="kontakt"><div className="content-square"><i className="fa fa-paper-plane fa-4x"></i><h3>Kontakt</h3></div></Link>
    </div>

  </div>
)

export default Content
