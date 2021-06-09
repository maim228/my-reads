import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './book.js'

class Search extends Component{
  state = {
    search:'',
    books: [],
  };
  //update books with search value
  updateSearch = (search) => {
    this.setState(() =>({
        search: search
    }))
    BooksAPI.search(search)
    .then((resp)=>
    {if (resp && resp.length > 0){
      this.setState({ books:resp });
    }else{
      this.setState({ books:[] });
    }})
    

}
    render(){
      let allbook = this.state.books
      let search = this.state.search
      let books= this.props.books
      let secondF = allbook.length > 0
      ?allbook.map((book)=>(<Book key={book.id} bookinfo={book} allbooks={books}/>))
      :'Not Found'
      
      //get books filterd by search value
      let filterd = search === '' 
        ? 'type your search above'
        :secondF
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                value = {this.state.search}
                onChange = {(event)=> this.updateSearch(event.target.value)}
                 placeholder="Search books by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {filterd}
              </ol>
            </div>
          </div>
        )
    }
}
export default Search 