// Bookstore.js

import React from "react";

const Bookstore = ({ books, onEditClick, onDeleteClick }) => {
  return (
    <div>
      <h2>Bookstore</h2>
      <div className="card-container">
        {books.map((book, index) => (
          <div className="card" key={index}>
            <p><strong>Book Title : </strong>{book.title}</p>
            <p><strong>Author Name : </strong> {book.author}</p>
            <p><strong>ISBN : </strong> {book.isbn}</p>
            <p><strong>Publication Date : </strong> {book.publicationDate}</p>
            <p><strong>Author Birth Date : </strong> {book.authorBirthDate}</p>
            <p><strong>Biography : </strong> {book.biography}</p>
            <div className="button-container">
              <button className="edit-button" onClick={() => onEditClick(book)}>Edit</button>
              <button className="delete-button" onClick={() => onDeleteClick(book)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookstore;
