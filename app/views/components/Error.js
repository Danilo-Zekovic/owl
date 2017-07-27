import React from 'react'

const ErrorMessage = (props) => (
  <div className="text-center">
    <i className="fa fa-exclamation-triangle fa-5x" aria-hidden="true"></i>
    <h1>Error</h1>
    <h3>{props.children}</h3>
  </div>
)

export default ErrorMessage
