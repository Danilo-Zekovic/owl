import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import Loading from './Loading'
import ErrorMessage from './Error'
import SearchPostsList from './SearchPostsList'

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
  // handles change in any of the inputs
  handleOnChange(event){
    const target = event.target; // get the element that had the change
    // value in input
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name; // name of the element

    this.setState({
      [name]: value
    });
  }

  // on search btn click set the keywords to serched paramaters
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
        {/* display list only when it was searched for list */}
        {(this.state.keywords != '') ? <SearchPostsList
          keywords={this.state.keywords}
          /> : null}
      </div>
    );
  }
};

/*const PostSearchQuery = gql`
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
})(UserPostSearch)*/

export default UserPostSearch
