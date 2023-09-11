import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Bookstore from "./Bookstore";
import Navigation from "./Navigation"; // Assuming you have a Navigation component
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const editBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    setEditingBook(null);
  };

  const deleteBook = (bookToDelete) => {
    const updatedBooks = books.filter((book) => book.id !== bookToDelete.id);
    setBooks(updatedBooks);
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Library Management System</h1>
        <Navigation /> 
        <Routes>
          <Route
            path="/"
            element={
              <Admin
                onBookSubmit={addBook}
                editingBook={editingBook}
                onEditSubmit={editBook}
              />
            }
          />
          <Route
            path="/bookstore"
            element={
              <Bookstore
                books={books}
                onEditClick={setEditingBook}
                onDeleteClick={deleteBook}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
