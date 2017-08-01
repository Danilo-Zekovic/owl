import React from 'react'

function SearchBar(props) {
  return (
    <form>
      <div className={"input-group " + props.className}>
        <input type="text" className="form-control" placeholder="Search"/>
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
