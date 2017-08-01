import React from 'react'
import SearchBar from './SearchBar'

class PostSearch extends React.Component {
  constructor(){
    super()
    this.state= {

    }
  }

  render(){
    return (
      <SearchBar
        className="col-md-4" />
    );
  }
};

export default PostSearch
