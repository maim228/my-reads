import React, { Component } from 'react'

class Shelf extends Component{
    render(){
        const allBooks = this.props.books;
        const title = this.props.title;
        const move = this.props.move;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {allBooks.map((book)=>
                          <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks === undefined
        ?'https://www.drupal.org/files/issues/2019-07-21/missing.png'
        :book.imageLinks.thumbnail})` }}></div>
                              <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={(e)=>move(book,e.target.value)}>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors.join(' , ')}</div>
                            <div className="book-authors"><a className='preview' href={book.previewLink} rel="noreferrer" target='_blank'>Preview</a></div>
                          </div>
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Shelf;