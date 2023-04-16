import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:8080/books");
    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:8080/books", {
      title,
    });
    console.log(response);
    setBooks([...books, response.data]);
  };

  const delBookById = async (id) => {
    await axios.delete(`http://localhost:8080/books/${id}`);
    const updated = books.filter((each) => {
      return each.id !== id;
    });
    setBooks(updated);
  };

  const updateBook = async (id, updatedTitle) => {
    console.log(id, updatedTitle);
    const response = await axios.put(`http://localhost:8080/books/${id}`, {
      title: updatedTitle,
    });
    console.log(response);
    const updated = books.map((each) => {
      if (id === each.id) {
        return response.data;
      }
      return each;
    });
    setBooks(updated);
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, createBook, delBookById, updateBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
