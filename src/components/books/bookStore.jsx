import React, { Component } from "react";

class BookStore extends Component {
  state = {
    title: "Book Store",
    allBooks: [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Classic Fiction',
        cost: '$12.99',
        image: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
      },
      {
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        cost: '$10.50',
        image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'American Classic',
        cost: '$9.99',
        image: 'https://covers.openlibrary.org/b/id/7352163-L.jpg'
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romantic Fiction',
        cost: '$11.50',
        image: 'https://covers.openlibrary.org/b/id/8084472-L.jpg'
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        cost: '$14.25',
        image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg'
      }
    ],
  };
  render() {
    return (
      <div className="container">
        <table>
          <thead>
            <tr className='table m-5'>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>{this.renderAllBooks()}</tbody>
        </table>
      </div>
    );
  }
  renderAllBooks() {
    return this.state.allBooks.map((eachBook, index) => (
      <tr key={index}>
        <td>
          <img src={eachBook.image} alt={eachBook.title} width="150" />
        </td>
        <td>{eachBook.title}</td>
        <td>{eachBook.author}</td>
        <td>{eachBook.genre}</td>
        <td>{eachBook.cost}</td>
      </tr>
    ));
  }
}

export default BookStore;
