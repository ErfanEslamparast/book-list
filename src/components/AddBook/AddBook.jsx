import React, { useState } from "react";
import "./AddBook.css";
import Bookinfo from "./BookInfo/Bookinfo";

const AddBook = () => {
  const [books, setBooks] = useState([
    
  ]);
    const [newBook, setnewBook] = useState();
    const titleHandler = input=>{
        setnewBook({...newBook,title:input});
        
    }
    const authorHandler = input=>{
        setnewBook({...newBook,author:input});
    }
    const yearHandler = input=>{
        setnewBook({...newBook,year:input});    
    }
    const addBook = (e)=>{
        e.preventDefault()
        setBooks([...books,{id:books.length+1,...newBook}]);
        setnewBook('')
    }

  return (
    <>
    <form>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={(e)=>titleHandler(e.target.value)} />
      </div>

      <div className="author">
        <label htmlFor="author">Author</label>
        <input type="text" id="author" onChange={(e)=>authorHandler(e.target.value)} />
      </div>

      <div className="year">
        <label htmlFor="year">Year</label>
        <input type="text" id="year" onChange={(e)=>yearHandler(e.target.value)}/>
      </div>
      <button className="add-book" onClick={(e)=>addBook(e)}>Add Book</button>
    </form>
    <div className="books-list">
        <div className="head">
        <h2 className="year">Year</h2>
        <h2 className="author">Author</h2>
        <h2 className="title">Title</h2>
        </div>
    </div>
        <div className="book-info">{books.map(book=><Bookinfo {...book} key={book.id}></Bookinfo>)}</div>
    </>
  );
};

export default AddBook;
