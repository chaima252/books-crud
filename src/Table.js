import React, { useState, useEffect } from 'react';
import Addbook from './Addbook';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Form, Input, Button } from 'antd';

function Table() {

  const [books, setBooks] = useState([]);

  //! modals
  const [isAddModal, setIsAddModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  //which book i'm editing
  const [editingBook, setEditingBook] = useState(null);

  const [form] = Form.useForm();

  //? search if i have stored books in localstorage, convert to json (else array vide)
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  //? te5dem whenever fama changes f books state
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);


  //function to add a book
  const addBook = (newbook) => {
    const bookId = { ...newbook, id: uuidv4() };
    setBooks([...books, bookId]);
    setIsAddModal(false);

  };


  //function to edit a book
  const editBook = (book) => {
    setEditingBook(book);
    setIsEditModal(true); //open modal
  };

  const handleUpdate = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedBooks = books.map((book) =>
          book.id === editingBook.id ? { ...book, ...values } : book
        );
        setBooks(updatedBooks);
        setIsEditModal(false);
        setEditingBook(null);
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };


  //function to cancel modal
  const handleCancel = () => {
    setIsAddModal(false);
    setIsEditModal(false);
    setEditingBook(null);
    form.resetFields();
  };

  //function to delete a book
  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
 <div className='Table'>
        <button class='btn btn-primary' onClick={() => setIsAddModal(true)}>Add Book</button>



  <table class="table table-hover" books={books}>
    <Addbook
        visible={isAddModal}
        onCreate={addBook}
        onCancel={handleCancel}
    />
   
   
  
      
   <thead>
    <tr>
      <th scope="col">Titre</th>
      <th scope="col">Auteur</th>
      <th scope="col">Prix </th>
      <th scope='col'>Editer</th>
      <th scope='col'>Supprimer</th>

    </tr>
  </thead>
  <tbody>
  
  {books.map((book) => (
            <tr key={book.id} className="table-default">
              {/* <th scope="row">{book.id}</th> */}
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>
                <button
                  className='btn btn-info'
                  onClick={() => editBook(book)}

                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className='btn btn-primary'
                  onClick={() => {
                    deleteBook(book.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

  </tbody>
</table>
<Modal
        visible={isEditModal}
        title="Edit Book"
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="update" type="primary" onClick={handleUpdate}>
            Update
          </Button>,
        ]}
      >
      <Form
          form={form}
          layout="vertical"
          name="editBookForm"
          initialValues={editingBook}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: 'Please enter the title of the book',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="author"
            label="Author"
            rules={[
              {
                required: true,
                message: 'Please enter the author of the book',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              {
                required: true,
                message: 'Please enter the price of the book',
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          
    </Form>  
    
</Modal>
    </div>
  )
}

export default Table