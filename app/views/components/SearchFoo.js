import React from 'react'

function SearchFoo(props) {
  return (
    <div className="row">
      <div className="col-md-4">
        <form>
          <div className={"form-group"}>
            <input
              type="text"
              name="searchBar"
              className="form-control"
              placeholder="Search/Pretrazi"
              value={props.value}
              onChange={props.onChange}
              />
          </div>
        </form>
      </div>
      <div className="col-md-2">
        <button className="btn btn-default" onClick={props.onClick}>
          Search/Pronadji  <i className="glyphicon glyphicon-search"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchFoo
