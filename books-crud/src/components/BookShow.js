import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, isShowEdit] = useState(false);

  const { delBookById } = useBooksContext();

  const handleDel = () => {
    delBookById(book.id);
  };
  const handleUpdate = () => {
    isShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    isShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit onSubmit={handleSubmit} book={book} />;

  return (
    <div className="book-show">
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200 `}
      ></img>
      {content}
      <div className="actions">
        <button className="edit" onClick={handleUpdate}>
          edit
        </button>
        <button className="delete" onClick={handleDel}>
          remove
        </button>
      </div>
    </div>
  );
}

export default BookShow;
