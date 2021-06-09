import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Container from './container'
import Search from './search'
import { Route } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
   books:[]
  }
  //get all my books
  componentDidMount(){
    BooksAPI.getAll().then((resp)=>this.setState({ books:resp }));
  
  }
  //change shelf function
  moveBook = (book, shelfName) => {
    BooksAPI.update(book, shelfName).then(() => {
      BooksAPI.getAll().then((newBooks) => {
       this.setState({ books: newBooks });
       })
    });
   }

  render() {
    return (
      <div className="app">
        {/* Detect if we in search page */}
          <Route path='/search' render={()=>(<Search books={this.state.books} />)} />
          
         {/* Detect if we in main page */}

            <Route exact path='/' render={()=>(<Container allcont={this.state.books} move={this.moveBook} />)} />
            
          </div>
        )
    
  }
}

export default BooksApp
