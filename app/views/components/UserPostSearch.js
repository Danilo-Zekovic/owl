import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import Loading from './Loading'
import ErrorMessage from './Error'
import SearchPostsList from './SearchPostsList'
import SearchFoo from './SearchFoo'

class UserPostSearch extends React.Component {
  constructor(){
    super()
    this.state= {
      keywords:'',
      searchBar:'',
      advanceSearch:false,
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleOnChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearchClick(){
    this.setState({
      keywords:this.state.searchBar
    })
  }

  render(){
    return (
      <div>
        <h3>Find a post/Pronadjite clanak</h3>
        <SearchBar
          value={this.state.searchBar}
          onChange={this.handleOnChange}
          onClick={this.handleSearchClick}
          />
        {(this.state.keywords != '') ? <SearchPostsList
          keywords={this.state.keywords}
          /> : null}

      </div>
    );
  }
};

const PostSearchQuery = gql`
  query PostSearchQuery($keywords:String!){
    searchPosts(keywords:$keywords){
      _id
      title
      description
      post
      subTitle
      author
    }
  }
`

const PostSearchWithData = graphql(PostSearchQuery, {
  options:(ownProps) => ({
    variables:{
      keywords:"asd"
    }
  })
})(UserPostSearch)

export default UserPostSearch
