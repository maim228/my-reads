import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './shelf'

class Container extends Component{
    render(){
      //filter books with shelf name
      const allBooks=this.props.allcont;
      const currentlyReading= allBooks.filter((book) => book.shelf === 'currentlyReading');
      const read = allBooks.filter((book) => book.shelf === 'read');
      const wantToRead = allBooks.filter((book) => book.shelf === 'wantToRead');
      const move = this.props.move;
        return(
          <div className="list-books">
            
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          {/*three shelf component each one for different shelf*/}
          <Shelf title='Currently Reading' books={currentlyReading} move={move} />
          <Shelf title='Read' books={read} move={move} />
          <Shelf title='Want to Read' books={wantToRead} move={move} />

            <div className="open-search">
              {/*open search page */}
              <Link className="search-button" to='/search'>Add a book</Link>
            </div>
            </div>

        )
}
}
 export default Container 