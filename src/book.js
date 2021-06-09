import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component{
  state={
    books:this.props.allbooks,
  }
  //change shelf of books in search page
    moveBook = (book, shelfName) => {
        BooksAPI.update(book, shelfName).then(() => {
          BooksAPI.getAll().then((newBooks) => {
           this.setState({ books: newBooks });
           })
        });
     console.log(this.state.books)
       }
    render(){
        const book =this.props.bookinfo;
        const allbooks=this.state.books;
        //loops to detect if book in our library or not
        const values = allbooks.filter((c)=>c.id.toLowerCase().includes(book.id.toLowerCase()))
        const realV = values.length > 0 
        ? values.filter((c)=>c.id === book.id).map((c)=>c.shelf).toString()
        :"none"  
        //detect if book has thumbinal or not
        const thumb= book.imageLinks === undefined
        ?'https://www.drupal.org/files/issues/2019-07-21/missing.png'
        :book.imageLinks.thumbnail
              
        return(
            <li key={book.id}>
                <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumb})` }}></div>
                              <div className="book-shelf-changer">
                                <select value={realV} onChange={(e)=>this.moveBook(book,e.target.value)}>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                            <div className="book-authors"><a className='preview' href={book.previewLink} rel="noreferrer" target='_blank'>Preview</a></div>
                          </div>
            </li>
        )
    }
}

export default Book